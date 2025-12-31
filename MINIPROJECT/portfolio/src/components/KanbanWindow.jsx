import React from 'react';
import KanbanApp from '../kanban/App';
import '../kanban/App.css';

const KanbanWindow = () => {
  return (
    <div style={{
      width: '100%',
      height: '550px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      margin: '20px auto',
      border: '1px solid #e5e7eb'
    }}>
      {/* Window header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '12px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div style={{ fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📋</span>
          TaskFlow Kanban Board
        </div>
        <div style={{
          fontSize: '12px',
          opacity: 0.9,
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '3px 10px',
          borderRadius: '12px'
        }}>
          Interactive Task Manager
        </div>
      </div>
      
      {/* Kanban app content */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        padding: '0'
      }}>
        <KanbanApp />
      </div>
    </div>
  );
};

export default KanbanWindow;