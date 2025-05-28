// Load staff information
function loadStaffInfo() {
    const staffList = document.getElementById('staff-list');
    
    staffData.forEach(([label, value]) => {
        const item = document.createElement('div');
        item.className = 'info-item';
        
        const labelSpan = document.createElement('span');
        labelSpan.className = 'label';
        labelSpan.textContent = label;
        
        const valueSpan = document.createElement('span');
        valueSpan.className = 'value';
        valueSpan.textContent = value;
        
        item.appendChild(labelSpan);
        item.appendChild(valueSpan);
        staffList.appendChild(item);
    });
}

function initializeCompleteness() {
    const input = document.querySelector('.completeness-input');
    const progressBar = document.querySelector('.completeness-bar-fill');
    const totalEpisodes = 26; 

    // 将input类型设置为number
    input.type = 'number';
    input.min = '0';
    input.max = totalEpisodes.toString();

    function updateProgress(value) {
        const progress = Math.min(100, Math.max(0, (value / totalEpisodes) * 100));
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('data-progress', Math.round(progress));
    }

    input.addEventListener('blur', (e) => {
        let value = parseInt(e.target.value) || 0;
        value = Math.min(totalEpisodes, Math.max(0, value));
        e.target.value = value || '';
    });

    const updateButton = document.querySelector('.completeness-button');
    updateButton.addEventListener('click', () => {
        const value = parseInt(input.value) || 0;
        // 这里可以添加保存到服务器的逻辑
        updateProgress(value);
        
        updateButton.textContent = '完成！';
        updateButton.style.backgroundColor = '#4CAF50'; // 绿色
        
        setTimeout(() => {
            updateButton.textContent = '更新';
            updateButton.style.backgroundColor = ''; // 恢复原色
        }, 1000);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadStaffInfo();
    initializeCompleteness();
}); 