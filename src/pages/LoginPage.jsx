import { useState } from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export function LoginPage({ onSubmitSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please enter email and password.');
      return;
    }

    setError('');
    onSubmitSuccess?.();
  };

  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-36">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-7 md:p-9 shadow-[0_18px_52px_-28px_rgba(24,59,86,0.25)]">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Welcome back</p>
          <h1 className="mb-2 text-3xl font-bold text-dark">Login</h1>
          <p className="mb-7 text-sm text-muted">
            For now, any email and password works so you can continue building the admin dashboard.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-dark">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@lab.com"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-dark">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error && (
              <p className="rounded-xl border border-[#F7D2D2] bg-[#FFF6F6] px-3 py-2 text-sm font-medium text-[#B42318]">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full justify-center" size="md">
              Login
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
