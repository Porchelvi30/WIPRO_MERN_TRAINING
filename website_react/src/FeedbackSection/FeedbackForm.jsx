import React, { useState } from 'react';

const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({ q1: '', q2: '', q3: '', q4: '' });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    // Check if any field is filled
    if (feedback.q1 || feedback.q2 || feedback.q3 || feedback.q4) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback({ q1: '', q2: '', q3: '', q4: '' });
      }, 3000);
    } else {
      alert("Please type something first! 😊");
    }
  };

  // 🛠️ FIX: Inline style with specific property mapping
  // Ithu global CSS-ai kandaipa override pannum
  const forceBlackText = {
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid #ccc'
  };

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-alt)' }}>
      {/* FORCE CSS logic for this component only */}
      <style>
        {`
          #feedback-area textarea {
            color: #000000 !important;
            background-color: #ffffff !important;
          }
          #feedback-area textarea::placeholder {
            color: #888888 !important;
          }
        `}
      </style>

      <div className="container" id="feedback-area">
        <div className="bg-card p-5 rounded-4 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
          
          {submitted ? (
            <div className="text-center py-5">
              <h2 className="fw-bold text-primary">✨ Sent Successfully!</h2>
              <p className="text-theme">Thank you for your response.</p>
            </div>
          ) : (
            <>
              <h2 className="fw-bold text-primary mb-4 text-center">SHARE YOUR EXPERIENCE ✨</h2>
              
              <div className="mb-4">
                <label className="fw-bold mb-2 d-block text-theme">1. Shopping Experience?</label>
                <textarea 
                  className="form-control p-3" 
                  rows="2"
                  value={feedback.q1}
                  onChange={(e) => setFeedback({...feedback, q1: e.target.value})}
                  placeholder="Type here..."
                  style={forceBlackText}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2 d-block text-theme">2. GlowMate Tips Helpful?</label>
                <textarea 
                  className="form-control p-3" 
                  rows="2"
                  value={feedback.q2}
                  onChange={(e) => setFeedback({...feedback, q2: e.target.value})}
                  placeholder="Type here..."
                  style={forceBlackText}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2 d-block text-theme">3. Collection Variety?</label>
                <textarea 
                  className="form-control p-3" 
                  rows="2"
                  value={feedback.q3}
                  onChange={(e) => setFeedback({...feedback, q3: e.target.value})}
                  placeholder="Type here..."
                  style={forceBlackText}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2 d-block text-theme">4. Navigation Ease?</label>
                <textarea 
                  className="form-control p-3" 
                  rows="2"
                  value={feedback.q4}
                  onChange={(e) => setFeedback({...feedback, q4: e.target.value})}
                  placeholder="Type here..."
                  style={forceBlackText}
                ></textarea>
              </div>

              <button 
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary w-100 rounded-pill fw-bold py-2 mt-3"
                style={{ cursor: 'pointer', position: 'relative', zIndex: 1 }}
              >
                SUBMIT FEEDBACK
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;