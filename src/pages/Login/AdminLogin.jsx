import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── HARDCODED CREDENTIALS ───────────────────────────────────────────────────
const ADMIN_USERNAME = 'arman';
const ADMIN_PASSWORD = 'Arman';
// ─────────────────────────────────────────────────────────────────────────────

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (form.username === ADMIN_USERNAME && form.password === ADMIN_PASSWORD) {
        sessionStorage.setItem('arman_admin_auth', 'true');
        navigate('/armanadmin/dashboard');
      } else {
        setLoading(false);
        setError('Invalid username or password. Please try again.');
      }
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f2027 100%)',
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
      <div className="absolute bottom-[-100px] right-[-60px] w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4 rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
        }}
      >
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #f59e0b, #ef4444, #f59e0b)' }} />

        <div className="px-8 py-10 sm:px-10">
          {/* Brand */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: 'linear-gradient(135deg, #f59e0b22, #f59e0b44)', border: '2px solid #f59e0b66' }}
            >
              <svg className="w-8 h-8" style={{ color: '#f59e0b' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-widest uppercase" style={{ color: '#f8fafc', letterSpacing: '0.15em' }}>
              Arman
            </h1>
            <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: '#94a3b8' }}>Admin Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#94a3b8' }}>
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-4 h-4" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text" name="username" value={form.username} onChange={handleChange}
                  placeholder="Enter username" autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9', caretColor: '#f59e0b' }}
                  onFocus={e => e.target.style.border = '1px solid #f59e0b66'}
                  onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#94a3b8' }}>
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-4 h-4" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange}
                  placeholder="Enter password" autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9', caretColor: '#f59e0b' }}
                  onFocus={e => e.target.style.border = '1px solid #f59e0b66'}
                  onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none" style={{ color: '#475569' }}>
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                style={{ background: '#ef444422', border: '1px solid #ef444444', color: '#fca5a5' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              className="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-200 mt-2"
              style={{
                background: loading ? 'rgba(245,158,11,0.4)' : 'linear-gradient(90deg, #f59e0b, #d97706)',
                color: loading ? '#fcd34d' : '#1c1917',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(245,158,11,0.35)',
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Authenticating...
                </span>
              ) : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs mt-8" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} Arman. Authorized access only.
          </p>
        </div>
      </div>
    </div>
  );
}