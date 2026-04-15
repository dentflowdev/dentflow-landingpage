import { NavLink, Outlet } from 'react-router-dom';
import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardList,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  UserRound,
  Users,
  Wallet,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Labs',      to: '/admin/labs',      icon: FlaskConical    },
  { label: 'Orders',    to: '/admin/orders',    icon: ClipboardList   },
  { label: 'Users',     to: '/admin/users',     icon: Users           },
  { label: 'Doctors',   to: '/admin/doctors',   icon: UserRound       },
  { label: 'Payments',  to: '/admin/payments',  icon: Wallet          },
  { label: 'Reports',   to: '/admin/reports',   icon: BarChart3       },
  { label: 'Settings',  to: '/admin/settings',  icon: Settings        },
];

export function AdminLayout({ onLogout }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#F4F8FC] via-[#F7FAFD] to-[#F1F5F9] font-sans text-[#111827]">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className="hidden w-[152px] shrink-0 flex-col border-r border-[#D9E8F4] bg-gradient-to-b from-[#F8FCFF] via-[#FAFCFF] to-[#F4F8FC] shadow-[0_10px_30px_-24px_rgba(15,23,42,0.6)] lg:flex">
        {/* Brand */}
        <div className="flex h-16 items-center gap-2 px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0891B2]">
            <span className="text-sm font-bold text-white">OL</span>
          </div>
          <span className="text-sm font-semibold text-[#111827]">OmniLab Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-2">
          {navItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white shadow-[0_8px_18px_-12px_rgba(6,182,212,0.9)]'
                      : 'text-[#566476] hover:bg-white hover:text-[#111827] hover:shadow-sm',
                  ].join(' ')
                }
              >
                <ItemIcon size={16} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* System status */}
        <div className="mx-2 mb-6 rounded-xl border border-[#E6EEF5] bg-white/95 px-3 py-3 text-[9px] shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)] backdrop-blur">
          <p className="font-semibold text-[#111827]">System Status</p>
          <p className="mt-1 text-[#6B7280]">Network Online</p>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 items-center justify-between gap-3 border-b border-[#E5E7EB]/80 bg-white/90 px-4 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.8)] backdrop-blur md:px-6">
          {/* Search */}
          <div className="flex min-w-0 w-full max-w-sm items-center gap-2 rounded-xl border border-[#DCE9F4] bg-[#F8FBFF] px-3 py-2 shadow-inner md:max-w-md">
            <Search size={16} className="shrink-0 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Global search across labs, orders, users..."
              className="min-w-0 flex-1 bg-transparent text-sm text-[#374151] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>

          <div className="ml-auto flex items-center gap-2 md:gap-4">
            {/* Date */}
            <div className="hidden shrink-0 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] sm:inline-flex">
              <CalendarDays size={16} />
              Oct 12 - Oct 19
            </div>

            {/* Bell */}
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#6B7280] transition-colors hover:bg-[#F9FAFB]"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>

            {/* User */}
            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <div className="text-right">
                <p className="text-xs font-semibold leading-none text-[#111827]">Adrian Walker</p>
                <p className="mt-0.5 text-[10px] leading-none text-[#6B7280]">Chief Admin</p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] text-xs font-bold text-white">
                AW
              </div>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={onLogout}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#D4E6F5] bg-white px-3 py-2 text-sm font-medium text-[#374151] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F9FCFF] hover:shadow-md"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
