import { useMemo, useState } from 'react';
import {
  Ban,
  Eye,
  Pencil,
  Plus,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';

const initialLabs = [
  {
    id: 1,
    name: 'Precision Health Labs',
    location: 'Austin, TX',
    totalOrders: 1250,
    activeUsers: 142,
    status: 'Active',
    revenue: 45298,
  },
  {
    id: 2,
    name: 'Metro Diagnostics',
    location: 'Seattle, WA',
    totalOrders: 980,
    activeUsers: 118,
    status: 'Active',
    revenue: 32126,
  },
  {
    id: 3,
    name: 'Skyline Bio-Med',
    location: 'Denver, CO',
    totalOrders: 450,
    activeUsers: 41,
    status: 'Inactive',
    revenue: 12400,
  },
  {
    id: 4,
    name: 'Evergreen Pathology',
    location: 'Phoenix, AZ',
    totalOrders: 0,
    activeUsers: 0,
    status: 'Blocked',
    revenue: 0,
  },
  {
    id: 5,
    name: 'Nova Research Center',
    location: 'Boston, MA',
    totalOrders: 2100,
    activeUsers: 212,
    status: 'Active',
    revenue: 79200,
  },
  {
    id: 6,
    name: 'Alpha Diagnostics',
    location: 'Miami, FL',
    totalOrders: 670,
    activeUsers: 63,
    status: 'Inactive',
    revenue: 18450,
  },
  {
    id: 7,
    name: 'Northline Labs',
    location: 'San Jose, CA',
    totalOrders: 1560,
    activeUsers: 156,
    status: 'Active',
    revenue: 61580,
  },
  {
    id: 8,
    name: 'Apex Clinical',
    location: 'Chicago, IL',
    totalOrders: 530,
    activeUsers: 54,
    status: 'Blocked',
    revenue: 14280,
  },
  {
    id: 9,
    name: 'BrightCore Diagnostics',
    location: 'Portland, OR',
    totalOrders: 1120,
    activeUsers: 97,
    status: 'Active',
    revenue: 39870,
  },
  {
    id: 10,
    name: 'Summit Care Labs',
    location: 'Atlanta, GA',
    totalOrders: 760,
    activeUsers: 77,
    status: 'Active',
    revenue: 25410,
  },
  {
    id: 11,
    name: 'ZenPath Medical',
    location: 'Dallas, TX',
    totalOrders: 320,
    activeUsers: 29,
    status: 'Inactive',
    revenue: 9350,
  },
  {
    id: 12,
    name: 'CoreGen Labs',
    location: 'Raleigh, NC',
    totalOrders: 860,
    activeUsers: 88,
    status: 'Active',
    revenue: 28790,
  },
];

const pageSize = 6;

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function LabsPage() {
  const [labs, setLabs] = useState(initialLabs);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLabId, setSelectedLabId] = useState(initialLabs[0].id);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [addForm, setAddForm] = useState({
    name: '',
    location: '',
    totalOrders: '',
    activeUsers: '',
    revenue: '',
    status: 'Active',
  });
  const [editForm, setEditForm] = useState({
    id: null,
    name: '',
    location: '',
    totalOrders: '',
    activeUsers: '',
    revenue: '',
    status: 'Active',
  });

  const totalLabs = labs.length;
  const activeLabs = labs.filter((lab) => lab.status === 'Active').length;
  const totalOrdersAcrossLabs = labs.reduce((sum, lab) => sum + lab.totalOrders, 0);

  const filteredLabs = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return labs.filter((lab) => {
      const searchMatch = lab.name.toLowerCase().includes(normalizedQuery);
      const statusMatch = statusFilter === 'All' || lab.status === statusFilter;
      return searchMatch && statusMatch;
    });
  }, [labs, searchQuery, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredLabs.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedLabs = filteredLabs.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize,
  );

  const selectedLab = labs.find((lab) => lab.id === selectedLabId) ?? null;

  const handleFilterChange = (nextStatus) => {
    setStatusFilter(nextStatus);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleToggleBlock = (labId) => {
    setLabs((prevLabs) =>
      prevLabs.map((lab) =>
        lab.id === labId
          ? { ...lab, status: lab.status === 'Blocked' ? 'Active' : 'Blocked' }
          : lab,
      ),
    );
  };

  const handleOpenEdit = (lab) => {
    setEditForm({
      id: lab.id,
      name: lab.name,
      location: lab.location,
      totalOrders: String(lab.totalOrders),
      activeUsers: String(lab.activeUsers),
      revenue: String(lab.revenue),
      status: lab.status,
    });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (event) => {
    event.preventDefault();
    if (!editForm.name.trim() || !editForm.location.trim()) return;

    setLabs((prevLabs) =>
      prevLabs.map((lab) =>
        lab.id === editForm.id
          ? {
              ...lab,
              name: editForm.name.trim(),
              location: editForm.location.trim(),
              totalOrders: Number(editForm.totalOrders) || 0,
              activeUsers: Number(editForm.activeUsers) || 0,
              revenue: Number(editForm.revenue) || 0,
              status: editForm.status,
            }
          : lab,
      ),
    );
    setIsEditModalOpen(false);
  };

  const handleAddLab = (event) => {
    event.preventDefault();
    if (!addForm.name.trim() || !addForm.location.trim()) return;

    const nextLab = {
      id: Date.now(),
      name: addForm.name.trim(),
      location: addForm.location.trim(),
      totalOrders: Number(addForm.totalOrders) || 0,
      activeUsers: Number(addForm.activeUsers) || 0,
      revenue: Number(addForm.revenue) || 0,
      status: addForm.status,
    };

    setLabs((prevLabs) => [nextLab, ...prevLabs]);
    setSelectedLabId(nextLab.id);
    setAddForm({
      name: '',
      location: '',
      totalOrders: '',
      activeUsers: '',
      revenue: '',
      status: 'Active',
    });
    setIsAddModalOpen(false);
    setCurrentPage(1);
  };

  return (
    <section className="rounded-xl border border-[#E3E8EF] bg-white p-4 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.6)] md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#111827] md:text-2xl">Labs Management</h1>
          <p className="mt-1 text-sm text-[#6B7280]">
            Track all labs, monitor activity, and control account status.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0891B2] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_20px_-14px_rgba(6,182,212,0.9)] transition-all hover:-translate-y-0.5"
        >
          <Plus size={16} />
          Add New Lab
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-4">
          <p className="text-xs font-medium text-[#6B7280]">Total Labs</p>
          <p className="mt-1 text-2xl font-bold text-[#111827]">{totalLabs}</p>
        </div>
        <div className="rounded-lg border border-[#D1FAE5] bg-[#ECFDF5] p-4">
          <p className="text-xs font-medium text-[#047857]">Active Labs</p>
          <p className="mt-1 text-2xl font-bold text-[#065F46]">{activeLabs}</p>
        </div>
        <div className="rounded-lg border border-[#CFFAFE] bg-[#ECFEFF] p-4">
          <p className="text-xs font-medium text-[#0E7490]">Total Orders Across Labs</p>
          <p className="mt-1 text-2xl font-bold text-[#0F172A]">
            {totalOrdersAcrossLabs.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <div className="flex min-w-[250px] flex-1 items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F9FAFB] px-3 py-2">
          <Search size={16} className="text-[#9CA3AF]" />
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            type="text"
            placeholder="Search by lab name"
            className="w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
          />
        </div>
        {['All', 'Active', 'Inactive', 'Blocked'].map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => handleFilterChange(status)}
            className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
              statusFilter === status
                ? 'border-[#06B6D4] bg-[#ECFEFF] text-[#0E7490]'
                : 'border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F9FAFB]'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-[#E5E7EB]">
        <table className="w-full min-w-[980px]">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#F8FAFC]">
              {[
                'Lab Name',
                'Location',
                'Total Orders',
                'Active Users',
                'Status',
                'Revenue',
                'Actions',
              ].map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-[#6B7280]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedLabs.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-8 text-center text-sm font-medium text-[#6B7280]"
                >
                  No labs found for the selected filters.
                </td>
              </tr>
            ) : (
              paginatedLabs.map((lab, index) => (
                <tr
                  key={lab.id}
                  className={`${
                    index !== paginatedLabs.length - 1 ? 'border-b border-[#F1F5F9]' : ''
                  } hover:bg-[#F8FBFF]`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-[#111827]">{lab.name}</td>
                  <td className="px-4 py-3 text-sm text-[#374151]">{lab.location}</td>
                  <td className="px-4 py-3 text-sm text-[#374151]">
                    {lab.totalOrders.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#374151]">
                    {lab.activeUsers.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        lab.status === 'Active'
                          ? 'bg-[#DCFCE7] text-[#166534]'
                          : lab.status === 'Inactive'
                            ? 'bg-[#F3F4F6] text-[#4B5563]'
                            : 'bg-[#FEE2E2] text-[#991B1B]'
                      }`}
                    >
                      {lab.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-[#0F172A]">
                    {formatCurrency(lab.revenue)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setSelectedLabId(lab.id)}
                        className="inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-white px-2 py-1 text-xs font-medium text-[#374151] hover:bg-[#F9FAFB]"
                      >
                        <Eye size={13} />
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(lab)}
                        className="inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-white px-2 py-1 text-xs font-medium text-[#374151] hover:bg-[#F9FAFB]"
                      >
                        <Pencil size={13} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleBlock(lab.id)}
                        className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold ${
                          lab.status === 'Blocked'
                            ? 'border-[#86EFAC] bg-[#F0FDF4] text-[#166534]'
                            : 'border-[#FECACA] bg-[#FEF2F2] text-[#991B1B]'
                        }`}
                      >
                        {lab.status === 'Blocked' ? <ShieldCheck size={13} /> : <Ban size={13} />}
                        {lab.status === 'Blocked' ? 'Unblock' : 'Block'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[#6B7280]">
        <span>
          Showing {filteredLabs.length === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1} to{' '}
          {Math.min(safeCurrentPage * pageSize, filteredLabs.length)} of {filteredLabs.length} labs
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={safeCurrentPage === 1}
            className="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`rounded-md px-3 py-1.5 text-sm ${
                safeCurrentPage === page
                  ? 'bg-[#06B6D4] text-white'
                  : 'border border-[#E5E7EB] bg-white text-[#374151]'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={safeCurrentPage === totalPages}
            className="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {selectedLab && (
        <div className="mt-5 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
            Lab Details
          </p>
          <div className="mt-2 grid grid-cols-1 gap-3 text-sm text-[#374151] md:grid-cols-2">
            <p>
              <span className="font-semibold text-[#111827]">Lab Name:</span> {selectedLab.name}
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Location:</span> {selectedLab.location}
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Status:</span> {selectedLab.status}
            </p>
            <p>
              <span className="font-semibold text-[#111827]">Revenue:</span>{' '}
              {formatCurrency(selectedLab.revenue)}
            </p>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4">
          <form
            onSubmit={handleAddLab}
            className="w-full max-w-lg rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#111827]">Add New Lab</h2>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-md p-1 text-[#6B7280] hover:bg-[#F3F4F6]"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                required
                value={addForm.name}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Lab Name"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                required
                value={addForm.location}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, location: event.target.value }))
                }
                placeholder="Location"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={addForm.totalOrders}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, totalOrders: event.target.value }))
                }
                placeholder="Total Orders"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={addForm.activeUsers}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, activeUsers: event.target.value }))
                }
                placeholder="Active Users"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={addForm.revenue}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, revenue: event.target.value }))
                }
                placeholder="Revenue"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <select
                value={addForm.status}
                onChange={(event) =>
                  setAddForm((prev) => ({ ...prev, status: event.target.value }))
                }
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#374151]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white"
              >
                Add Lab
              </button>
            </div>
          </form>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4">
          <form
            onSubmit={handleSaveEdit}
            className="w-full max-w-lg rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#111827]">Edit Lab</h2>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="rounded-md p-1 text-[#6B7280] hover:bg-[#F3F4F6]"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                required
                value={editForm.name}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Lab Name"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                required
                value={editForm.location}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, location: event.target.value }))
                }
                placeholder="Location"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={editForm.totalOrders}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, totalOrders: event.target.value }))
                }
                placeholder="Total Orders"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={editForm.activeUsers}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, activeUsers: event.target.value }))
                }
                placeholder="Active Users"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <input
                value={editForm.revenue}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, revenue: event.target.value }))
                }
                placeholder="Revenue"
                type="number"
                min="0"
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              />
              <select
                value={editForm.status}
                onChange={(event) =>
                  setEditForm((prev) => ({ ...prev, status: event.target.value }))
                }
                className="rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#06B6D4]"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Blocked">Blocked</option>
              </select>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm font-medium text-[#374151]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#06B6D4] px-4 py-2 text-sm font-semibold text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
