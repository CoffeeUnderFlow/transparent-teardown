// --- 1. SYNTAX HIGHLIGHTER (USING CSS CLASSES) ---
function highlightCode(code) {
    let safe = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    const regex = /(\/\*[\s\S]*?\*\/|\/\/.*)|("[^"]*"|'[^']*')|(&lt;\/?[a-zA-Z0-9\-]+)|(\b(?:function|return|let|const|var|if|else|window|document)\b)|(\b[a-zA-Z0-9_]+(?=\s*\())|(\b[a-zA-Z\-]+(?=\s*=))/g;
    
    return safe.replace(regex, (match, p1, p2, p3, p4, p5, p6) => {
        if (p1) return `<span class="syn-comment">${p1}</span>`; 
        if (p2) return `<span class="syn-string">${p2}</span>`; 
        if (p3) {
            let prefix = p3.startsWith('&lt;/') ? '&lt;/' : '&lt;';
            let tag = p3.replace(prefix, '');
            return `${prefix}<span class="syn-tag">${tag}</span>`; 
        }
        if (p4) return `<span class="syn-keyword">${p4}</span>`; 
        if (p5) return `<span class="syn-function">${p5}</span>`; 
        if (p6) return `<span class="syn-attr">${p6}</span>`;
        return match;
    });
}

// Initialize Background Code
window.addEventListener('DOMContentLoaded', () => {
    const bgElement = document.getElementById('raw-source-bg');
    const actualCode = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
    bgElement.innerHTML = highlightCode(actualCode);
});

// --- 2. THEME TOGGLE LOGIC ---
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        // Switch back to Dark Mode (Default)
        document.body.removeAttribute('data-theme');
        themeBtn.innerText = 'Light Mode';
    } else {
        // Switch to Light Mode
        document.body.setAttribute('data-theme', 'light');
        themeBtn.innerText = 'Dark Mode';
    }
});
