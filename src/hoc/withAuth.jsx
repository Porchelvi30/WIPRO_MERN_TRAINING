// hooks mela depend aagama direct-ah state handle panrom
const withAuth = (WrappedComponent) => {
  return (props) => {
    // Hooks-ai remove pannittu normal state use panrom
    const [user, setUser] = useState(null); 
    const [isRegister, setIsRegister] = useState(false);

    // Login function logic ingaye handle panrom
    const handleLogin = (values) => {
      setUser(values); // user data-vai set panni auth process mudikirom
    };

    if (!user) {
      return (
        <div className="auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#003cc7' }}>
          <div className="card p-4 shadow-lg animate-fade" style={{ width: '400px', borderRadius: '20px' }}>
            {/* Login or Register Logic based on state */}
            {isRegister ? (
              <Register onRegisterSuccess={() => setIsRegister(false)} />
            ) : (
              <Login onLoginSuccess={handleLogin} />
            )}
            
            <p className="text-center mt-3 text-primary fw-bold" style={{cursor:'pointer'}} onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Already a member? Login" : "New? Create Account"}
            </p>
          </div>
        </div>
      );
    }
    
    // Auth success aanadhuku apparam normal-ah application content kaatum
    return <WrappedComponent {...props} user={user} setUser={setUser} />;
  };
};