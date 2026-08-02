// ============================================
// AI Tools Hub - App Logic
// ============================================

let currentTheme = 'cosmic';

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
  initStars();
  renderAITools();
  renderPeoplePlan();
  renderTechRefs();
  renderFooter();
  initChatProvider();

  const savedTheme = localStorage.getItem('ev-theme');
  if (savedTheme) switchTheme(savedTheme);
});

// ===== Stars =====
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.2, opacity: Math.random() * 0.8 + 0.2, twinkle: Math.random() * 0.02
      });
    }
  }
  resize();
  window.addEventListener('resize', resize);

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const opacity = getComputedStyle(document.documentElement).getPropertyValue('--star-opacity').trim();
    if (parseFloat(opacity) === 0) { requestAnimationFrame(drawStars); return; }
    stars.forEach(s => {
      s.opacity += s.twinkle;
      if (s.opacity > 1 || s.opacity < 0.2) s.twinkle = -s.twinkle;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + s.opacity + ')';
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// ===== Theme =====
function switchTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ev-theme', theme);
  document.querySelectorAll('.theme-dot').forEach(d => {
    d.classList.toggle('active', d.getAttribute('data-theme') === theme);
  });
}

// ===== Render AI Tools =====
function renderAITools(filterText, filterCat) {
  const grid = document.getElementById('aiGrid');
  let tools = AI_TOOLS;

  if (filterText) {
    const ft = filterText.toLowerCase();
    tools = tools.filter(t =>
      t.name.toLowerCase().includes(ft) ||
      t.name_cn.toLowerCase().includes(ft) ||
      t.provider.toLowerCase().includes(ft) ||
      t.desc_cn.toLowerCase().includes(ft) ||
      t.features_cn.some(f => f.toLowerCase().includes(ft))
    );
  }
  if (filterCat && filterCat !== 'all') {
    tools = tools.filter(t => t.cat === filterCat);
  }

  document.getElementById('aiResultCount').textContent = tools.length + ' 个AI工具';

  if (tools.length === 0) {
    grid.innerHTML = '<div class="no-results">未找到匹配的AI工具，请尝试其他关键词。</div>';
    return;
  }

  grid.innerHTML = tools.map(t => `
    <div class="ai-card" data-cat="${t.cat}">
      <div class="ai-card-header">
        <div class="ai-card-icon">${t.icon}</div>
        <div>
          <div class="ai-card-title">${t.name}</div>
          <div class="ai-card-provider">${t.name_cn} · ${t.provider}</div>
        </div>
      </div>
      <div class="ai-card-cat">${t.cat_cn} / ${t.cat_en}</div>
      <div class="ai-card-desc">${t.desc_cn}</div>
      <div class="ai-card-features">
        ${t.features_cn.map(f => `<span class="ai-feature-tag">${f}</span>`).join('')}
      </div>
      <div class="ai-free-tier">
        <strong>🎁 ${t.free_tier}</strong>
      </div>
      <div class="ai-card-links">
        <a href="${t.docs_url}" target="_blank" rel="noopener" class="ai-link-btn">📖 文档</a>
        <a href="${t.api_url}" target="_blank" rel="noopener" class="ai-link-btn secondary">🔗 API</a>
        <button class="ai-link-btn secondary" onclick="showAIDetail(${t.id})">📋 详情</button>
      </div>
    </div>
  `).join('');
}

function filterAITools() {
  const text = document.getElementById('aiSearch').value;
  const cat = document.getElementById('aiCatFilter').value;
  renderAITools(text, cat);
}

function showAIDetail(id) {
  const t = AI_TOOLS.find(t => t.id === id);
  if (!t) return;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-cat">${t.cat_cn} / ${t.cat_en}</div>
    <h2>${t.icon} ${t.name} · ${t.name_cn}</h2>
    <p style="color:var(--text-muted);margin-bottom:1rem;">提供方：${t.provider}</p>
    <h4>能力特点</h4>
    <p>${t.desc_cn}</p>
    <h4>功能列表</h4>
    <p>${t.features_cn.map(f => `🏷️ ${f}`).join('  ')}</p>
    <h4>免费额度</h4>
    <p>🎁 ${t.free_tier}</p>
    <h4>模型名称</h4>
    <p><code>${t.model}</code></p>
    <h4>API地址</h4>
    <p><code>${t.api_url}</code></p>
    <h4>计费说明</h4>
    <p>${t.pricing}</p>
    <h4>文档链接</h4>
    <p><a href="${t.docs_url}" target="_blank" style="color:var(--accent);">${t.docs_url}</a></p>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== Render People Plan =====
function renderPeoplePlan() {
  const grid = document.getElementById('peopleGrid');
  grid.innerHTML = PEOPLE_PLAN.map(p => `
    <div class="person-card">
      <div class="person-header">
        <div class="person-avatar">${p.avatar}</div>
        <div>
          <div class="person-role">${p.role}</div>
          <div class="person-title">${p.title}</div>
        </div>
      </div>
      <ul class="person-tasks">
        ${p.tasks_cn.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ===== Render Tech Refs =====
function renderTechRefs() {
  const grid = document.getElementById('techGrid');
  grid.innerHTML = TECH_REFS.map(t => `
    <div class="tech-card">
      <div class="tech-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.desc_cn}</p>
      <div class="tech-tools">
        ${t.tools.map(tool => `<span class="tech-tool-tag">${tool}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== Chat =====
function initChatProvider() {
  const select = document.getElementById('chatProvider');
  AI_TOOLS.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = `${t.icon} ${t.name} · ${t.name_cn}`;
    select.appendChild(opt);
  });
}

let chatHistory = [];

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const providerId = parseInt(document.getElementById('chatProvider').value);
  const apiKey = document.getElementById('apiKey').value.trim();
  const provider = AI_TOOLS.find(t => t.id === providerId);

  if (!provider) {
    addChatMessage('user', text);
    addChatMessage('ai', '请先选择一个AI系统。');
    input.value = '';
    return;
  }

  addChatMessage('user', text);
  input.value = '';

  if (!apiKey) {
    addChatMessage('ai', `请输入${provider.name}的API Key。请访问 ${provider.docs_url} 获取免费API Key。`);
    return;
  }

  // Show loading
  const loadingEl = addChatMessage('ai', '⏳ 正在思考中...');

  // Build request based on provider
  callAI(provider, apiKey, text).then(response => {
    loadingEl.querySelector('.chat-content').textContent = response;
  }).catch(err => {
    loadingEl.querySelector('.chat-content').textContent = '❌ 请求失败：' + err.message + '\n\n请检查API Key是否正确，或访问文档：' + provider.docs_url;
  });
}

async function callAI(provider, apiKey, text) {
  // Most providers support OpenAI-compatible API
  const endpoints = {
    1: 'https://api.deepseek.com/v1/chat/completions',      // DeepSeek
    2: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', // Qwen
    3: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', // GLM
    4: 'https://api.groq.com/openai/v1/chat/completions',     // Llama via Groq
    5: 'https://api.mistral.ai/v1/chat/completions',          // Mistral
    6: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', // Gemini
    7: 'https://api.anthropic.com/v1/messages',               // Claude
    8: 'https://api.openai.com/v1/images/generations',         // DALL-E
    9: 'https://api.stability.ai/v1/generation/stable-image-core/v1/generate', // SD
    10: 'https://api.groq.com/openai/v1/audio/transcriptions' // Whisper via Groq
  };

  const models = {
    1: 'deepseek-chat', 2: 'qwen-turbo', 3: 'glm-4-flash',
    4: 'llama-3.3-70b-versatile', 5: 'open-mistral-7b',
    6: 'gemini-1.5-flash', 7: 'claude-3-haiku-20240307',
    8: 'dall-e-3', 9: 'stable-image-core', 10: 'whisper-large-v3'
  };

  const url = endpoints[provider.id];
  const model = models[provider.id];

  // Handle Gemini differently
  if (provider.id === 6) {
    const res = await fetch(url + '?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text }] }]
      })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  }

  // Handle Claude differently
  if (provider.id === 7) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 2048,
        messages: [{ role: 'user', content: text }]
      })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return data.content[0].text;
  }

  // Handle image generation (DALL-E, SD)
  if (provider.id === 8 || provider.id === 9) {
    return `🎨 ${provider.name}是图像生成模型。请通过 ${provider.docs_url} 的文档直接使用图像生成功能。在对话终端中暂不支持图像生成。\n\n你可以尝试选择文本类AI系统进行对话。`;
  }

  // Handle Whisper (audio transcription)
  if (provider.id === 10) {
    return `🔊 ${provider.name}是语音识别模型。请通过 ${provider.docs_url} 上传音频文件进行转录。在对话终端中暂不支持音频上传。\n\n你可以尝试选择文本类AI系统进行对话。`;
  }

  // Standard OpenAI-compatible API (DeepSeek, Qwen, GLM, Llama/Groq, Mistral)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: '你是地球村商学院的AI助手，为学员提供学习指导和知识解答。' },
        { role: 'user', content: text }
      ],
      max_tokens: 2048,
      temperature: 0.7
    })
  });

  if (!res.ok) {
    const errData = await res.text();
    throw new Error('HTTP ' + res.status + ': ' + errData.substring(0, 200));
  }

  const data = await res.json();
  return data.choices[0].message.content;
}

function addChatMessage(role, text) {
  const window = document.getElementById('chatWindow');
  const msg = document.createElement('div');
  msg.className = 'chat-message ' + (role === 'user' ? 'user-message' : 'ai-message');
  msg.innerHTML = `
    <div class="chat-avatar">${role === 'user' ? '👤' : '🤖'}</div>
    <div class="chat-content">${text}</div>
  `;
  window.appendChild(msg);
  window.scrollTop = window.scrollHeight;
  return msg;
}

function clearChat() {
  document.getElementById('chatWindow').innerHTML = `
    <div class="chat-message ai-message">
      <div class="chat-avatar">🤖</div>
      <div class="chat-content">对话已清空。选择一个AI系统开始新的对话。</div>
    </div>
  `;
  chatHistory = [];
}

// ===== Modal =====
function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && e.type === 'click') return;
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Footer =====
function renderFooter() {
  document.getElementById('footerLinks').innerHTML = FOOTER_LINKS.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener" class="footer-link">
      <span class="link-icon">🔗</span>
      <span class="link-text">${l.text}</span>
    </a>
  `).join('');
}

// ===== Keyboard =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
