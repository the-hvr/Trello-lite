
import './Style/InfoModal.css';

export default function infoModal({isOpen, onClose}){
    if(!isOpen) return null;

    return (
        <div className="modal-overlay">
      <div className="modal-box">

        <div className="modal-header">
          <div><h2>Trello Lite – </h2><span>Mini Project Manager</span></div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-content">
          <h4>How to Use:</h4>
          <ul>
            <li><i class="fa-solid fa-plus modalIcon"></i> Add tasks in any column</li>
            <li><i class="fa-solid fa-thumbs-up modalIcon"></i> Mark tasks as complete</li>
            <li><i class="fa-solid fa-trash-can modalIcon"></i> Delete tasks anytime</li>
            <li><i class="fa-solid fa-broom modalIcon"></i> Use “Empty Column” to clear tasks</li>
            <li><i class="fa-solid fa-angles-right modalIcon"></i> Move tasks from To Do → Doing → Done</li>
          </ul>

          <h4>Priority Levels:</h4>
          <ul>
            <li>🟢 Low - Minor or flexible tasks</li>
            <li>🟡 Medium – Important tasks</li>
            <li>🔴 High – Urgent / critical tasks</li>
          </ul>

          <p className="modal-tip">
            Tip: Keep tasks moving daily for better productivity 🚀
          </p>
        </div>

      </div>
    </div>
    )
}