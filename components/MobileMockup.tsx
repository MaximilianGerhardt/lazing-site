export function MobileMockup() {
  return (
    <div className="phone-shell" aria-label="Lazing mobile command center preview">
      <div className="phone-top">
        <span>08:07</span>
        <span className="phone-dot" aria-hidden="true" />
        <span className="battery-pill" aria-hidden="true">96</span>
      </div>

      <div className="phone-brand">
        <span>L A Z I N G</span>
        <i aria-hidden="true" />
      </div>

      <div className="field-pill wide">
        <span className="status-dot" aria-hidden="true" />
        Personal · Product Launch
      </div>

      <div className="chat-area">
        <p className="user-bubble">Mach mir aus meiner Produktidee eine Go-to-Market Strategie.</p>
        <p className="assistant-bubble">
          I created a launch system for this. It needs one decision before execution.
        </p>
      </div>

      <div className="manifested-card">
        <div className="card-topline">
          <span className="card-label">Manifested System</span>
          <strong>Plan · 58%</strong>
        </div>
        <h3>Launch System</h3>
        <div className="progress-track" aria-hidden="true"><span /></div>
        <ul>
          <li>Market analysis</li>
          <li>Target audience</li>
          <li>Messaging strategy</li>
          <li>Launch roadmap + KPIs</li>
        </ul>
      </div>

      <div className="resolution-card compact">
        <span className="card-label">Resolution</span>
        <h3>Choose GTM direction</h3>
        <button type="button">Founder-led launch <small>recommended</small></button>
        <button type="button">Product-led growth <span>→</span></button>
      </div>

      <div className="composer">
        <span>Describe your intention...</span>
        <button type="button" aria-label="Voice input">⌕</button>
        <button type="button" aria-label="Send">→</button>
      </div>
    </div>
  );
}
