import {
  Activity,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  Download,
  Eye,
  FileText,
  Filter,
  Globe,
  LayoutDashboard,
  LogOut,
  Pencil,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Trash2,
  Users,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

/* ─── KPI data ────────────────────────────────────────────── */
const kpiRow1 = [
  {
    label: "Total Labs Registered",
    value: "142",
    delta: "+6% vs last month",
    trend: "up",
    color: "cyan",
    icon: Activity,
  },
  {
    label: "Total Doctors Registered",
    value: "2,480",
    delta: "+12% vs last month",
    trend: "up",
    color: "orange",
    icon: Users,
  },
  {
    label: "Total Orders Placed",
    value: "18,520",
    delta: "+24% vs last month",
    trend: "up",
    color: "purple",
    icon: ShoppingCart,
  },
  {
    label: "Total Revenue Generated",
    value: "$1.24M",
    delta: "+15.% vs last month",
    trend: "up",
    color: "green",
    icon: TrendingUp,
  },
];

const kpiRow2 = [
  {
    label: "Total Users Registered",
    value: "12,850",
    delta: "+8% vs last month",
    trend: "up",
    icon: Users,
  },
  {
    label: "Pending Payments",
    value: "$42,800",
    delta: "-2% vs last month",
    trend: "down",
    icon: Wallet,
  },
  {
    label: "Active Users (24h)",
    value: "1,402",
    delta: "+18% vs last week",
    trend: "up",
    icon: TrendingUp,
  },
];

/* ─── Labs table ─────────────────────────────────────────── */
const labRows = [
  {
    name: "Precision Health Labs",
    status: "Active",
    orders: "1,250",
    revenue: "$45,298",
    contact: "John Carter",
  },
  {
    name: "Metro Diagnostics",
    status: "Active",
    orders: "980",
    revenue: "$32,126",
    contact: "Sarah Chen",
  },
  {
    name: "Skyline Bio-Med",
    status: "Inactive",
    orders: "450",
    revenue: "$12,400",
    contact: "Mike Ross",
  },
  {
    name: "Evergreen Pathology",
    status: "Blocked",
    orders: "0",
    revenue: "$0",
    contact: "Ellen White",
  },
  {
    name: "Nova Research Center",
    status: "Active",
    orders: "2,100",
    revenue: "$79,200",
    contact: "David Kim",
  },
];

/* ─── Alert data ─────────────────────────────────────────── */
const alerts = [
  {
    level: "Critical",
    icon: TrendingDown,
    title: "Failed payments detected for Nova Research Lab",
    time: "2 hrs ago",
  },
  {
    level: "Warning",
    icon: TrendingDown,
    title: "Sudden drop in order volume (23%) in South Zone",
    time: "4 hrs ago",
  },
  {
    level: "Info",
    icon: FileText,
    title: "New lab registration request: Alpha Diagnostics",
    time: "6 hrs ago",
  },
];

/* ─── Sidebar ────────────────────────────────────────────── */
function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", to: "/admin/dashboard" },
    { icon: Activity, label: "Labs", to: "/admin/labs" },
    { icon: ShoppingCart, label: "Orders", to: "/admin/orders" },
    { icon: Users, label: "Users", to: "/admin/users" },
    { icon: Users, label: "Doctors", to: "/admin/doctors" },
    { icon: CreditCard, label: "Payments", to: "/admin/payments" },
    { icon: FileText, label: "Reports", to: "/admin/reports" },
    { icon: Settings, label: "Settings", to: "/admin/settings" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[152px] border-r border-[#D9E8F4] bg-gradient-to-b from-[#F8FCFF] via-[#FAFCFF] to-[#F4F8FC] shadow-[0_10px_30px_-24px_rgba(15,23,42,0.6)]">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0891B2]">
          <span className="text-sm font-bold text-white">OL</span>
        </div>
        <span className="text-sm font-semibold text-[#111827]">
          OmniLab Admin
        </span>
      </div>

      {/* Menu */}
      <nav className="mt-2 space-y-1 px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white shadow-[0_8px_18px_-12px_rgba(6,182,212,0.9)]"
                  : "text-[#566476] hover:bg-white hover:text-[#111827] hover:shadow-sm"
              }`
            }
          >
            <item.icon size={16} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* System Status */}
      <div className="absolute bottom-6 left-2 right-2 rounded-xl border border-[#E6EEF5] bg-white/95 p-3 text-[9px] shadow-[0_12px_24px_-20px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span className="font-semibold text-[#111827]">SYSTEM STATUS</span>
        </div>
        <p className="mb-1 text-[#6B7280]">
          <span className="font-semibold text-[#111827]">Network:</span> Online
        </p>
        <p className="mb-1 text-[#6B7280]">
          <span className="font-semibold text-[#111827]">Uptime:</span> 99.98%
        </p>
        <p className="text-[#6B7280]">
          <span className="font-semibold text-[#111827]">Backend Core:</span>{" "}
          v2.4 | Real-time Sync: Active
        </p>
      </div>
    </div>
  );
}

/* ─── Top Header ─────────────────────────────────────────── */
function TopHeader({ onLogout }) {
  return (
    <div className="fixed left-[152px] right-0 top-0 z-10 flex h-16 items-center justify-between border-b border-[#E5E7EB]/80 bg-white/90 px-4 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.8)] backdrop-blur md:px-6">
      {/* Search */}
      <div className="flex w-full max-w-sm flex-1 items-center gap-2 rounded-xl border border-[#DCE9F4] bg-[#F8FBFF] px-3 py-2 shadow-inner md:max-w-md">
        <Globe size={16} className="text-[#9CA3AF]" />
        <input
          type="text"
          placeholder="Global search across labs, orders, users..."
          className="flex-1 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
        />
      </div>

      {/* Date & Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#374151] transition-colors hover:bg-[#F9FAFB] sm:flex"
        >
          <Calendar size={16} />
          <span>Oct 12 - Oct 19</span>
          <ChevronDown size={14} />
        </button>
        <button
          type="button"
          className="relative rounded-lg border border-[#E5E7EB] bg-white p-2 transition-colors hover:bg-[#F9FAFB]"
        >
          <Bell size={18} className="text-[#6B7280]" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#EF4444]" />
        </button>
        <div className="hidden items-center gap-2 md:flex">
          <div className="text-right">
            <p className="text-xs font-semibold text-[#111827]">
              Addison Walker
            </p>
            <p className="text-[10px] text-[#6B7280]">OWNER ADMIN</p>
          </div>
          <div className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2306B6D4' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dy='.35em' fill='white' font-family='sans-serif' font-weight='bold'%3EAW%3C/text%3E%3C/svg%3E"
              alt=""
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-2 rounded-lg border border-[#D4E6F5] bg-white px-3 py-2 text-sm font-medium text-[#374151] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#F9FCFF] hover:shadow-md"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
}

/* ─── KPI Card ──────────────────────────────────────────── */
function KpiCard({ item }) {
  const Icon = item.icon;

  // Color mapping
  const colorMap = {
    cyan: {
      bg: "bg-[#ECFEFF]",
      text: "text-[#0891B2]",
      border: "border-[#A5F3FC]",
    },
    orange: {
      bg: "bg-[#FFF7ED]",
      text: "text-[#EA580C]",
      border: "border-[#FDBA74]",
    },
    purple: {
      bg: "bg-[#F5F3FF]",
      text: "text-[#7C3AED]",
      border: "border-[#C4B5FD]",
    },
    green: {
      bg: "bg-[#F0FDF4]",
      text: "text-[#16A34A]",
      border: "border-[#86EFAC]",
    },
  };

  const colors = item.color
    ? colorMap[item.color]
    : {
        bg: "bg-[#F9FAFB]",
        text: "text-[#6B7280]",
        border: "border-[#E5E7EB]",
      };

  return (
    <div className={`rounded-xl border ${colors.border} bg-white p-4 shadow-[0_14px_30px_-28px_rgba(15,23,42,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-24px_rgba(15,23,42,0.3)]`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-[11px] font-medium text-[#6B7280]">{item.label}</p>
          <p className="mt-1 text-[30px] leading-none font-bold text-[#0F172A]">{item.value}</p>
        </div>
        <div className={`rounded-lg ${colors.bg} p-2.5`}>
          <Icon size={20} className={colors.text} />
        </div>
      </div>
      <p className="text-[11px] font-medium text-[#607086]">{item.delta}</p>
    </div>
  );
}

/* ─── Main Dashboard ─────────────────────────────────────── */
export function AdminDashboardPage({ onLogout }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F8FC] via-[#F7FAFD] to-[#F1F5F9]">
      <Sidebar />
      <TopHeader onLogout={onLogout} />

      {/* Main Content */}
      <div className="ml-[152px] mt-16 p-4 md:p-6">
        <div className="mx-auto max-w-[1400px] space-y-5 md:space-y-6">
          {/* ── Row 1: 4 KPI cards ───────────────────────────── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpiRow1.map((item) => (
              <KpiCard key={item.label} item={item} />
            ))}
          </div>

          {/* ── Row 2: 3 KPI + forecast ──────────────────────── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpiRow2.map((item) => (
              <KpiCard key={item.label} item={item} />
            ))}

            {/* Growth Forecast */}
          <div className="rounded-xl border border-[#A5F3FC] bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] p-4 shadow-[0_14px_30px_-26px_rgba(8,145,178,0.55)]">
              <p className="text-xs font-bold uppercase tracking-wide text-[#0891B2]">
                Growth Forecast
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#0E7490]">
                Expected 15% increase in orders by next quarter based on current
                signup velocity.
              </p>
              <a
                href="#"
                className="mt-3 inline-block text-xs font-semibold text-[#06B6D4] underline"
              >
                View Analytics Report →
              </a>
            </div>
          </div>

          {/* ── Performance Intelligence ──────────────────────── */}
          <div className="rounded-xl border border-[#E3E8EF] bg-white p-5 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:p-6">
            <h2 className="text-xl font-bold text-[#111827]">
              Performance Intelligence
            </h2>
            <p className="text-sm text-[#6B7280]">
              Real-time trends and network distribution analysis
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Chart panel */}
              <div className="lg:col-span-2">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#111827]">
                      Revenue & Order Trends
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      Daily performance overview across the network
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-lg bg-[#F3F4F6] p-1 shadow-inner">
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#111827] shadow-sm"
                    >
                      Daily
                    </button>
                    <button
                      type="button"
                      className="rounded-md px-3 py-1.5 text-xs font-medium text-[#6B7280]"
                    >
                      Weekly
                    </button>
                    <button
                      type="button"
                      className="rounded-md px-3 py-1.5 text-xs font-medium text-[#6B7280]"
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-[#E2EDF7] bg-gradient-to-b from-[#F0FDFF] to-white p-4 shadow-inner">
                  <svg
                    viewBox="0 0 500 200"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    {[40, 80, 120, 160].map((y) => (
                      <line
                        key={y}
                        x1="30"
                        y1={y}
                        x2="500"
                        y2={y}
                        stroke="#E5E7EB"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Y axis labels */}
                    <text x="5" y="35" fontSize="10" fill="#9CA3AF">
                      25000
                    </text>
                    <text x="5" y="75" fontSize="10" fill="#9CA3AF">
                      19500
                    </text>
                    <text x="5" y="115" fontSize="10" fill="#9CA3AF">
                      13000
                    </text>
                    <text x="5" y="155" fontSize="10" fill="#9CA3AF">
                      6500
                    </text>
                    <text x="5" y="190" fontSize="10" fill="#9CA3AF">
                      0
                    </text>

                    {/* Revenue curve - cyan */}
                    <path
                      d="M 50,140 L 110,130 L 170,100 L 230,110 L 290,70 L 350,80 L 410,60 L 470,100"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="3"
                    />
                    <path
                      d="M 50,140 L 110,130 L 170,100 L 230,110 L 290,70 L 350,80 L 410,60 L 470,100 L 470,200 L 50,200 Z"
                      fill="url(#gradient-cyan)"
                      opacity="0.3"
                    />

                    {/* Orders curve - orange */}
                    <path
                      d="M 50,150 L 110,145 L 170,120 L 230,125 L 290,90 L 350,100 L 410,80 L 470,120"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient
                        id="gradient-cyan"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#06B6D4"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#06B6D4"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                    </defs>

                    {/* X axis labels */}
                    <text x="45" y="195" fontSize="10" fill="#9CA3AF">
                      Mon
                    </text>
                    <text x="105" y="195" fontSize="10" fill="#9CA3AF">
                      Tue
                    </text>
                    <text x="165" y="195" fontSize="10" fill="#9CA3AF">
                      Wed
                    </text>
                    <text x="225" y="195" fontSize="10" fill="#9CA3AF">
                      Thu
                    </text>
                    <text x="290" y="195" fontSize="10" fill="#9CA3AF">
                      Fri
                    </text>
                    <text x="350" y="195" fontSize="10" fill="#9CA3AF">
                      Sat
                    </text>
                    <text x="410" y="195" fontSize="10" fill="#9CA3AF">
                      Sun
                    </text>
                  </svg>

                  {/* Legend */}
                  <div className="absolute right-4 top-4 flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-3 w-3 rounded-sm bg-[#06B6D4]" />
                      <span className="text-[#6B7280]">revenue</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block h-3 w-3 rounded-sm bg-[#F97316]" />
                      <span className="text-[#6B7280]">orders</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Donut chart */}
              <div>
                <h3 className="mb-1 text-lg font-bold text-[#111827]">
                  Order Distribution
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Market share by top lab facilities
                </p>

                <div className="mt-4 flex justify-center rounded-xl border border-[#E5E7EB] bg-[#FAFBFC] py-6 shadow-inner">
                  <div className="relative h-44 w-44">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full -rotate-90"
                    >
                      {/* Cyan segment - 45% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="20"
                        strokeDasharray="113 282"
                        strokeDashoffset="0"
                      />
                      {/* Orange segment - 23% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="20"
                        strokeDasharray="58 282"
                        strokeDashoffset="-113"
                      />
                      {/* Blue segment - 31% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="20"
                        strokeDasharray="78 282"
                        strokeDashoffset="-171"
                      />
                      {/* Gray segment - remaining */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="20"
                        strokeDasharray="33 282"
                        strokeDashoffset="-249"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-xs">
                  {[
                    { name: "City Central Lab", pct: "45%", color: "#06B6D4" },
                    { name: "North Health", pct: "23%", color: "#F97316" },
                    { name: "South Med", pct: "31%", color: "#3B82F6" },
                    { name: "Elite Diagnostics", pct: "1%", color: "#E5E7EB" },
                  ].map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[#374151]">{item.name}</span>
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {item.pct}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Labs Management ───────────────────────────────── */}
          <div className="rounded-xl border border-[#E3E8EF] bg-white p-5 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:p-6">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-[#111827]">
                  Labs Management
                </h2>
                <p className="text-sm text-[#6B7280]">
                  Manage registered laboratories and financial performance
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#374151] transition-all hover:-translate-y-0.5 hover:bg-[#F9FAFB] hover:shadow-sm"
                >
                  <Download size={16} /> Export CSV
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0891B2] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_-14px_rgba(6,182,212,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#0FB9D6] hover:to-[#0A93B1]"
                >
                  <Plus size={16} /> Add New Lab
                </button>
              </div>
            </div>

            {/* Filter bar */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="flex min-w-[250px] flex-1 items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F9FAFB] px-3 py-2">
                <Search size={16} className="text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Filter by lab name..."
                  className="flex-1 bg-transparent text-sm text-[#374151] outline-none placeholder:text-[#9CA3AF]"
                />
              </div>
              <button
                type="button"
                className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm text-[#374151] transition-colors hover:bg-white"
              >
                All Status
              </button>
              <button
                type="button"
                className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm text-[#374151] transition-colors hover:bg-white"
              >
                Region: Global
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm text-[#374151] transition-colors hover:bg-white"
              >
                <Filter size={14} /> More
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-inner">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Lab Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Orders Count
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Revenue
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Primary Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-[#6B7280]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {labRows.map((row, idx) => (
                    <tr
                      key={row.name}
                      className={
                        idx !== labRows.length - 1
                          ? "border-b border-[#F3F4F6] transition-colors hover:bg-[#F8FBFF]"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-sm text-[#111827]">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {row.status === "Blocked" ? (
                          <span className="inline-flex rounded-md bg-[#FEE2E2] px-2 py-0.5 text-xs font-semibold text-[#991B1B]">
                            Blocked
                          </span>
                        ) : (
                          <span
                            className={
                              row.status === "Active"
                                ? "text-[#16A34A]"
                                : "text-[#6B7280]"
                            }
                          >
                            {row.status}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#374151]">
                        {row.orders}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-[#06B6D4]">
                        {row.revenue}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#374151]">
                        {row.contact}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            className="rounded p-1.5 text-[#6B7280] transition-colors hover:bg-[#F3F4F6]"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            type="button"
                            className="rounded p-1.5 text-[#6B7280] transition-colors hover:bg-[#F3F4F6]"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            type="button"
                            className="rounded p-1.5 text-[#DC2626] transition-colors hover:bg-[#FEF2F2]"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between text-sm text-[#6B7280]">
              <span>Showing 1 to 5 of 142 labs</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm transition-colors hover:bg-[#F9FAFB]"
                >
                  Previous
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`rounded-md px-3 py-1.5 text-sm ${
                      n === 1
                        ? "bg-[#06B6D4] text-white"
                        : "border border-[#E5E7EB] bg-white transition-colors hover:bg-[#F9FAFB]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  className="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm transition-colors hover:bg-[#F9FAFB]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* ── Community + Financial ─────────────────────────── */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Community Overview */}
            <div className="rounded-xl border border-[#E3E8EF] bg-white p-5 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:p-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Community Overview
              </h3>
              <p className="text-sm text-[#6B7280]">
                User engagement and onboarding
              </p>

              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Doctor signups */}
                <div>
                  <p className="mb-3 text-xs font-semibold text-[#111827]">
                    Recent Doctor Signups
                  </p>
                  <div className="space-y-3">
                    {[
                      "Dr. James Wilson",
                      "Dr. James Wilson",
                      "Dr. James Wilson",
                    ].map((name, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DBEAFE] text-xs font-bold text-[#1E40AF]">
                            {name[3]}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#111827]">
                              {name}
                            </p>
                            <p className="text-[10px] text-[#9CA3AF]">
                              Cardiology · 2 days ago
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-[10px] font-medium text-[#06B6D4] hover:underline"
                        >
                          View Profile
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient registrations */}
                <div>
                  <p className="mb-3 text-xs font-semibold text-[#111827]">
                    Patient Registrations
                  </p>
                  <div className="space-y-3">
                    {["Alice Thompson", "Alice Thompson", "Alice Thompson"].map(
                      (name, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCE7F3] text-xs font-bold text-[#9F1239]">
                              A
                            </div>
                            <div>
                              <p className="text-xs font-medium text-[#111827]">
                                {name}
                              </p>
                              <p className="text-[10px] text-[#9CA3AF]">
                                Self Signup · 2 days ago
                              </p>
                            </div>
                          </div>
                          <span className="rounded bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-semibold text-[#15803D]">
                            New
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
                >
                  Manage All Doctors
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB]"
                >
                  Manage All Users
                </button>
              </div>
            </div>

            {/* Financial Health */}
            <div className="rounded-xl border border-[#E3E8EF] bg-white p-5 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:p-6">
              <h3 className="text-xl font-bold text-[#111827]">
                Financial Health
              </h3>
              <p className="text-sm text-[#6B7280]">
                Disbursements and pending reconciliations
              </p>

              {/* Settlement card */}
              <div className="mt-4 rounded-lg border border-[#A5F3FC] bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0891B2]">
                  Settlement Balance
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#111827]">$42,000</p>
                    <p className="mt-1 text-[10px] text-[#6B7280]">
                      Last Payout (Oct 15)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#6B7280]">Processing</p>
                    <p className="text-lg font-bold text-[#0891B2]">$18,000</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-[#06B6D4] py-2.5 text-sm font-semibold text-white hover:bg-[#0891B2]"
                >
                  Process Payment
                </button>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[#E5E7EB] p-3">
                  <p className="text-[10px] text-[#6B7280]">
                    Transaction Success Rate
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-2xl font-bold text-[#111827]">99.2%</p>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DCFCE7]">
                      <span className="text-xs text-[#15803D]">✓</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-[#FEE2E2] bg-[#FEF2F2] p-3">
                  <p className="text-[10px] text-[#6B7280]">Active Disputes</p>
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-2xl font-bold text-[#DC2626]">4</p>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEE2E2]">
                      <span className="text-xs text-[#DC2626]">⚠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Operational Alerts ────────────────────────────── */}
          <div className="rounded-xl border border-[#E3E8EF] bg-white p-5 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:p-6">
            <h3 className="text-xl font-bold text-[#111827]">
              Operational Alerts
            </h3>
            <p className="text-sm text-[#6B7280]">
              System events requiring your immediate attention
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              {alerts.map((alert, idx) => {
                const levelStyles = {
                  Critical: {
                    bg: "bg-[#FEE2E2]",
                    text: "text-[#991B1B]",
                    border: "border-[#FCA5A5]",
                    iconBg: "bg-[#991B1B]",
                  },
                  Warning: {
                    bg: "bg-[#FEF3C7]",
                    text: "text-[#92400E]",
                    border: "border-[#FCD34D]",
                    iconBg: "bg-[#F59E0B]",
                  },
                  Info: {
                    bg: "bg-[#DBEAFE]",
                    text: "text-[#1E40AF]",
                    border: "border-[#93C5FD]",
                    iconBg: "bg-[#3B82F6]",
                  },
                };
                const style = levelStyles[alert.level];
                const Icon = alert.icon;

                return (
                  <div
                    key={idx}
                    className={`rounded-lg border ${style.border} bg-white p-4`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <div className={`rounded-lg ${style.iconBg} p-2`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <span
                            className={`rounded-md ${style.bg} px-2 py-0.5 text-[10px] font-bold ${style.text}`}
                          >
                            {alert.level}
                          </span>
                          <span className="text-[10px] text-[#9CA3AF]">
                            {alert.time}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-[#111827]">
                          {alert.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-xs font-medium text-[#374151] hover:bg-[#F3F4F6]"
                      >
                        Investigate
                      </button>
                      <button
                        type="button"
                        className="flex-1 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2 text-xs font-medium text-[#374151] hover:bg-[#F3F4F6]"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Footer ────────────────────────────────────────── */}
          <div className="rounded-xl border border-[#E3E8EF] bg-white px-5 py-4 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.7)] md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B7280]">
              <div className="flex items-center gap-1">
                <span className="text-[#111827]">©</span>
                <span className="font-semibold text-[#111827]">
                  OmniLab v2.4
                </span>
                <span>© 2024 OmniLab Networks. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-[#111827]">
                  Documentation
                </a>
                <a href="#" className="hover:text-[#111827]">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#111827]">
                  System Support
                </a>
                <button
                  type="button"
                  className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1.5 text-xs font-medium text-[#374151] hover:bg-[#F3F4F6]"
                >
                  ENTERPRISE ACCESS
                </button>
              </div>
            </div>
          </div>

          {/* ── Admin Annotations ──────────────────────────────── */}
          <div className="rounded-xl border border-[#E3E8EF] bg-[#F9FAFB] p-4 shadow-[0_12px_26px_-24px_rgba(15,23,42,0.8)]">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
                <span className="text-[10px] font-bold text-[#6B7280]">i</span>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-[#111827]">
                Admin Annotations
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-3 text-[10px] leading-relaxed text-[#6B7280] lg:grid-cols-2">
              <p>
                <span className="font-semibold text-[#111827]">
                  Backend Integrity:
                </span>{" "}
                Data is synchronized every 15 seconds from the central
                PostgreSQL cluster. Order threads utilize a read replica to
                zero-impact on production transactional throughput.
              </p>
              <p>
                <span className="font-semibold text-[#111827]">
                  Data Restrictions:
                </span>{" "}
                Access to this view is strictly limited to users with the{" "}
                <span className="rounded bg-[#E0F2FE] px-1 py-0.5 font-mono text-[#0369A1]">
                  network_admin
                </span>{" "}
                flag. All data exports and CSV downloads are logged for security
                auditing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
