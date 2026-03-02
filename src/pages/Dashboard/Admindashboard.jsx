import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'https://arman-backend-cwew.onrender.com/api';

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Icons = {
  dashboard: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  products:  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  clients:   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  contact:   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  blog:      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  careers:   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  settings:  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  logout:    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>,
  trash:     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  whatsapp:  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  phone:     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  email:     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  download:  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
  bell:      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
  menu:      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
  calendar:  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  close:     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
  eye:       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
};

const NAV_ITEMS = [
  { label: 'Dashboard', icon: Icons.dashboard },
  { label: 'Products',  icon: Icons.products },
  { label: 'Enquiries', icon: Icons.clients },
  { label: 'Quotes',    icon: Icons.contact },
  { label: 'Blog',      icon: Icons.blog },
  { label: 'Careers',   icon: Icons.careers },
  { label: 'Settings',  icon: Icons.settings },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const toDateKey = (iso) => iso?.slice(0, 10); // 'YYYY-MM-DD'
const todayKey  = () => new Date().toISOString().slice(0, 10);
const fmtDate   = (iso) => new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
const fmtTime   = (iso) => new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
const fmtFull   = (iso) => `${fmtDate(iso)} at ${fmtTime(iso)}`;

function cleanPhone(p) { return p?.replace(/[\s\-()]/g, ''); }

function exportCSV(data, filename, columns) {
  const header = columns.map(c => c.label).join(',');
  const rows = data.map(row => columns.map(c => `"${(row[c.key] ?? '').toString().replace(/"/g, '""')}"`).join(','));
  const blob = new Blob([[header, ...rows].join('\n')], { type: 'text/csv' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename });
  a.click(); URL.revokeObjectURL(a.href);
}
function exportJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename });
  a.click(); URL.revokeObjectURL(a.href);
}

// ─── SHARED UI ────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    pending:   { bg: 'rgba(245,158,11,0.15)',  color: '#f59e0b' },
    resolved:  { bg: 'rgba(16,185,129,0.15)',  color: '#10b981' },
    contacted: { bg: 'rgba(59,130,246,0.15)',  color: '#3b82f6' },
    closed:    { bg: 'rgba(100,116,139,0.15)', color: '#94a3b8' },
  };
  const s = map[status] || map.pending;
  return <span className="text-xs font-semibold px-2 py-0.5 rounded-full capitalize" style={{ background: s.bg, color: s.color }}>{status || 'pending'}</span>;
}

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid rgba(245,158,11,0.2)', borderTopColor: '#f59e0b', animation: 'spin 0.8s linear infinite' }} />
      <p className="text-sm" style={{ color: '#475569' }}>Loading data...</p>
    </div>
  );
}

function EmptyState({ text }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <svg className="w-6 h-6" style={{ color: '#475569' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
      </div>
      <p className="text-sm" style={{ color: '#475569' }}>{text}</p>
    </div>
  );
}

function ContactActions({ phone, email }) {
  return (
    <div className="flex items-center gap-1.5">
      {phone && <>
        <a href={`tel:${cleanPhone(phone)}`} title="Call" className="flex items-center justify-center w-7 h-7 rounded-lg transition-all" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.25)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}>{Icons.phone}</a>
        <a href={`https://wa.me/${cleanPhone(phone)?.replace('+', '')}`} target="_blank" rel="noreferrer" title="WhatsApp" className="flex items-center justify-center w-7 h-7 rounded-lg transition-all" style={{ background: 'rgba(37,211,102,0.1)', color: '#25d366', border: '1px solid rgba(37,211,102,0.2)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.25)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.1)'}>{Icons.whatsapp}</a>
      </>}
      {email && <a href={`mailto:${email}?subject=Regarding your inquiry - Arman Engineering Works`} title="Email" className="flex items-center justify-center w-7 h-7 rounded-lg transition-all" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.25)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.1)'}>{Icons.email}</a>}
    </div>
  );
}

function ExportBar({ data, filename, columns }) {
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => exportCSV(data, `${filename}.csv`, columns)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}>{Icons.download} CSV</button>
      <button onClick={() => exportJSON(data, `${filename}.json`)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,158,11,0.1)'}>{Icons.download} JSON</button>
    </div>
  );
}

function DeleteModal({ onConfirm, onCancel, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}>
      <div className="w-full max-w-sm rounded-2xl overflow-hidden" style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.6)' }}>
        <div className="h-0.5" style={{ background: 'linear-gradient(90deg,#ef4444,#f59e0b)' }} />
        <div className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: 'rgba(239,68,68,0.15)', border: '2px solid rgba(239,68,68,0.3)', color: '#ef4444' }}>{Icons.trash}</div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#f1f5f9' }}>Delete Record?</h3>
          <p className="text-sm mb-6" style={{ color: '#64748b' }}>This action cannot be undone.</p>
          <div className="flex gap-3">
            <button onClick={onCancel} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>Cancel</button>
            <button onClick={onConfirm} disabled={loading} className="flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2" style={{ background: 'linear-gradient(90deg,#ef4444,#dc2626)', color: '#fff' }}>
              {loading ? <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} /> : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DETAIL POPUP MODAL ───────────────────────────────────────────────────────
function DetailModal({ row, onClose, isProductInquiry }) {
  if (!row) return null;
  const isPI = isProductInquiry;

  const Field = ({ label, value, highlight }) => value ? (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#475569' }}>{label}</span>
      <span className="text-sm" style={{ color: highlight ? '#f59e0b' : '#e2e8f0' }}>{value}</span>
    </div>
  ) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }} onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl overflow-hidden" style={{ background: '#0f1f35', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 40px 80px rgba(0,0,0,0.7)' }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="h-0.5" style={{ background: 'linear-gradient(90deg,#f59e0b,#3b82f6,#f59e0b)' }} />
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <h3 className="font-bold text-base" style={{ color: '#f1f5f9' }}>{isPI ? row.name : (row.fullName || row.name)}</h3>
            <p className="text-xs mt-0.5" style={{ color: '#475569' }}>Submitted {fmtFull(row.createdAt)}</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={row.status} />
            <button onClick={onClose} className="flex items-center justify-center w-8 h-8 rounded-lg transition-all" style={{ color: '#64748b', background: 'rgba(255,255,255,0.05)' }} onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>{Icons.close}</button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Contact Actions */}
          <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex-1">
              <p className="text-xs" style={{ color: '#64748b' }}>Quick Contact</p>
              <p className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{row.phone || 'No phone'}</p>
            </div>
            <ContactActions phone={row.phone} email={row.email} />
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Company" value={row.company || row.companyName} />
            <Field label="Email" value={row.email} />
            <Field label="Phone" value={row.phone} />
            <Field label="Source" value={row.source} />
            {isPI && <Field label="Product Name" value={row.productName} highlight />}
            {isPI && row.productPrice && <Field label="Product Price" value={`₹ ${row.productPrice} / ${row.productUnit || 'Piece'}`} highlight />}
            {!isPI && <Field label="Product" value={row.product || row.productName} highlight />}
            {!isPI && <Field label="Quantity" value={row.quantity} />}
          </div>

          {/* Requirement / Message */}
          {(row.requirement || row.message) && (
            <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}>
              <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#f59e0b' }}>
                {row.requirement ? 'Requirement' : 'Message'}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>{row.requirement || row.message}</p>
            </div>
          )}

          {/* Meta */}
          <div className="grid grid-cols-2 gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Field label="Submitted On" value={fmtDate(row.createdAt)} />
            <Field label="Time" value={fmtTime(row.createdAt)} />
            <Field label="Record ID" value={row._id?.slice(-8)} />
            <Field label="IP Address" value={row.ipAddress} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DATE GROUP HEADER ────────────────────────────────────────────────────────
function DateGroupHeader({ dateKey, count }) {
  const isToday = dateKey === todayKey();
  const isYesterday = dateKey === new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const label = isToday ? '📅 Today' : isYesterday ? '📅 Yesterday' : `📅 ${new Date(dateKey).toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}`;
  return (
    <div className="flex items-center gap-3 mt-6 mb-3 first:mt-0">
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: isToday ? '#f59e0b' : '#475569' }}>{label}</span>
      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: isToday ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.06)', color: isToday ? '#f59e0b' : '#64748b' }}>{count} record{count !== 1 ? 's' : ''}</span>
      <div className="flex-1 h-px" style={{ background: isToday ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.05)' }} />
    </div>
  );
}

// ─── PRODUCTS / PRODUCT-INQUIRIES VIEW ───────────────────────────────────────
const PI_COLS = [
  { key: 'name', label: 'Name' }, { key: 'company', label: 'Company' },
  { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' },
  { key: 'productName', label: 'Product' }, { key: 'productPrice', label: 'Price' },
  { key: 'requirement', label: 'Requirement' }, { key: 'status', label: 'Status' },
  { key: 'source', label: 'Source' }, { key: 'createdAt', label: 'Date' },
];

function ProductsView() {
  const [data, setData]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [delLoading, setDelLoading] = useState(false);
  const [search, setSearch]     = useState('');
  const [selectedDate, setSelectedDate] = useState(''); // '' = all, 'today' = today, YYYY-MM-DD = specific
  const [detailRow, setDetailRow] = useState(null);
  const calRef = useRef(null);

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const r = await fetch(`${API}/product-inquiries`);
      if (!r.ok) throw new Error();
      const j = await r.json();
      setData(j.data || []);
    } catch { setError('Failed to load. Is the server running on port 5000?'); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async () => {
    setDelLoading(true);
    try {
      await fetch(`${API}/product-inquiries/${deleteId}`, { method: 'DELETE' });
      setData(d => d.filter(x => x._id !== deleteId));
    } catch {}
    setDelLoading(false); setDeleteId(null);
  };

  // Apply search + date filters
  const afterSearch = data.filter(r =>
    !search || [r.name, r.email, r.company, r.productName, r.requirement]
      .some(v => v?.toLowerCase().includes(search.toLowerCase()))
  );

  const filtered = afterSearch.filter(r => {
    if (!selectedDate) return true;
    if (selectedDate === 'today') return toDateKey(r.createdAt) === todayKey();
    return toDateKey(r.createdAt) === selectedDate;
  });

  // Group by date descending
  const grouped = filtered.reduce((acc, row) => {
    const key = toDateKey(row.createdAt);
    if (!acc[key]) acc[key] = [];
    acc[key].push(row);
    return acc;
  }, {});
  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  const todayCount = data.filter(r => toDateKey(r.createdAt) === todayKey()).length;

  return (
    <div>
      {/* Header toolbar */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="text-lg font-bold" style={{ color: '#f1f5f9' }}>Product Inquiries</h2>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
            {data.length} total · {todayCount} today · showing {filtered.length}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ExportBar data={filtered} filename="product-inquiries" columns={PI_COLS} />
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-5 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Search */}
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, company, product…"
          className="px-3 py-1.5 rounded-lg text-sm outline-none flex-1 min-w-0"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9', minWidth: 180 }}
          onFocus={e => e.target.style.border = '1px solid rgba(245,158,11,0.4)'}
          onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'} />

        {/* Quick: All */}
        <button onClick={() => setSelectedDate('')}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          style={{ background: !selectedDate ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.05)', color: !selectedDate ? '#f59e0b' : '#94a3b8', border: !selectedDate ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.08)' }}>
          All Dates
        </button>

        {/* Quick: Today */}
        <button onClick={() => setSelectedDate(selectedDate === 'today' ? '' : 'today')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          style={{ background: selectedDate === 'today' ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.05)', color: selectedDate === 'today' ? '#f59e0b' : '#94a3b8', border: selectedDate === 'today' ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(255,255,255,0.08)' }}>
          {Icons.calendar} Today {todayCount > 0 && <span className="bg-amber-500 text-black text-xs rounded-full px-1.5 py-0 font-bold leading-4">{todayCount}</span>}
        </button>

        {/* Calendar date picker */}
        <div className="relative">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all"
            style={{ background: (selectedDate && selectedDate !== 'today') ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.05)', color: (selectedDate && selectedDate !== 'today') ? '#3b82f6' : '#94a3b8', border: (selectedDate && selectedDate !== 'today') ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
            onClick={() => calRef.current?.showPicker?.() || calRef.current?.click()}>
            {Icons.calendar}
            {(selectedDate && selectedDate !== 'today') ? new Date(selectedDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Pick Date'}
          </div>
          <input ref={calRef} type="date" value={(selectedDate && selectedDate !== 'today') ? selectedDate : ''}
            onChange={e => setSelectedDate(e.target.value || '')}
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', top: 0, left: 0, width: '100%', height: '100%' }} />
        </div>

        {/* Clear filter */}
        {selectedDate && (
          <button onClick={() => setSelectedDate('')}
            className="px-2 py-1.5 rounded-lg text-xs transition-all"
            style={{ color: '#64748b' }} onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
            ✕ Clear
          </button>
        )}
      </div>

      {/* Content */}
      {loading ? <Spinner /> : error ? (
        <div className="text-center py-12">
          <p className="text-sm mb-3" style={{ color: '#ef4444' }}>{error}</p>
          <button onClick={load} className="px-4 py-2 rounded-lg text-xs font-semibold" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>Retry</button>
        </div>
      ) : filtered.length === 0 ? <EmptyState text={selectedDate ? "No records found for this date." : "No product inquiries found."} /> : (
        <div>
          {sortedDates.map(dateKey => (
            <div key={dateKey}>
              <DateGroupHeader dateKey={dateKey} count={grouped[dateKey].length} />
              <div className="space-y-2">
                {grouped[dateKey].map(row => (
                  <ProductInquiryCard key={row._id} row={row}
                    onView={() => setDetailRow(row)}
                    onDelete={() => setDeleteId(row._id)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {deleteId && <DeleteModal onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={delLoading} />}
      {detailRow && <DetailModal row={detailRow} onClose={() => setDetailRow(null)} isProductInquiry />}
    </div>
  );
}

function ProductInquiryCard({ row, onView, onDelete }) {
  return (
    <div className="rounded-xl px-5 py-4 transition-all duration-150 cursor-pointer"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(245,158,11,0.2)'}
      onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'}
      onClick={onView}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Row 1: name + badges */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="font-semibold text-sm" style={{ color: '#f1f5f9' }}>{row.name}</span>
            <StatusBadge status={row.status} />
            {row.productName && row.productName !== 'General Inquiry' && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>{row.productName}</span>
            )}
            {row.productPrice && (
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>₹ {row.productPrice}</span>
            )}
          </div>
          {/* Row 2: meta */}
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs mb-2" style={{ color: '#64748b' }}>
            {row.company && <span>🏢 {row.company}</span>}
            {row.phone   && <span>📞 {row.phone}</span>}
            {row.source  && <span>📡 {row.source}</span>}
            <span>🕐 {fmtTime(row.createdAt)}</span>
          </div>
          {/* Row 3: requirement snippet */}
          {row.requirement && (
            <p className="text-xs leading-relaxed line-clamp-1" style={{ color: '#94a3b8' }}>{row.requirement}</p>
          )}
        </div>
        {/* Actions — stop propagation so card click doesn't fire */}
        <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
          <button onClick={onView}
            className="flex items-center justify-center w-7 h-7 rounded-lg transition-all"
            style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,158,11,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(245,158,11,0.1)'}>
            {Icons.eye}
          </button>
          <ContactActions phone={row.phone} email={row.email} />
          <button onClick={onDelete}
            className="flex items-center justify-center w-7 h-7 rounded-lg transition-all"
            style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}>
            {Icons.trash}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── ENQUIRIES VIEW ───────────────────────────────────────────────────────────
const ENQUIRY_COLS = [
  { key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' },
  { key: 'company', label: 'Company' }, { key: 'product', label: 'Product' }, { key: 'quantity', label: 'Quantity' },
  { key: 'message', label: 'Message' }, { key: 'status', label: 'Status' }, { key: 'source', label: 'Source' }, { key: 'createdAt', label: 'Date' },
];

function EnquiriesView() {
  const [data, setData]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [delLoading, setDelLoading] = useState(false);
  const [search, setSearch]     = useState('');
  const [detailRow, setDetailRow] = useState(null);

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try { const r = await fetch(`${API}/enquiry`); if (!r.ok) throw new Error(); const j = await r.json(); setData(j.data || []); }
    catch { setError('Failed to load data. Is the server running?'); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async () => {
    setDelLoading(true);
    try { await fetch(`${API}/enquiry/${deleteId}`, { method: 'DELETE' }); setData(d => d.filter(x => x._id !== deleteId)); } catch {}
    setDelLoading(false); setDeleteId(null);
  };

  const filtered = data.filter(r => !search || [r.name, r.email, r.company, r.product].some(v => v?.toLowerCase().includes(search.toLowerCase())));
  const grouped  = filtered.reduce((acc, row) => { const k = toDateKey(row.createdAt); if (!acc[k]) acc[k] = []; acc[k].push(row); return acc; }, {});
  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div><h2 className="text-lg font-bold" style={{ color: '#f1f5f9' }}>General Enquiries</h2><p className="text-xs mt-0.5" style={{ color: '#475569' }}>{data.length} total records</p></div>
        <div className="flex flex-wrap items-center gap-2">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" className="px-3 py-1.5 rounded-lg text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9', width: 200 }} onFocus={e => e.target.style.border = '1px solid rgba(245,158,11,0.4)'} onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'} />
          <ExportBar data={filtered} filename="enquiries" columns={ENQUIRY_COLS} />
        </div>
      </div>
      {loading ? <Spinner /> : error ? <div className="text-center py-12 text-sm" style={{ color: '#ef4444' }}>{error}</div> : filtered.length === 0 ? <EmptyState text="No enquiries found." /> : (
        <div>{sortedDates.map(dk => (
          <div key={dk}>
            <DateGroupHeader dateKey={dk} count={grouped[dk].length} />
            <div className="space-y-2">
              {grouped[dk].map(row => (
                <div key={row._id} className="rounded-xl px-5 py-4 transition-all cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }} onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(59,130,246,0.2)'} onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'} onClick={() => setDetailRow(row)}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-semibold text-sm" style={{ color: '#f1f5f9' }}>{row.name}</span>
                        <StatusBadge status={row.status} />
                        {row.product && <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }}>{row.product}</span>}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs mb-1" style={{ color: '#64748b' }}>
                        {row.company && <span>🏢 {row.company}</span>}
                        {row.phone && <span>📞 {row.phone}</span>}
                        {row.source && <span>📡 {row.source}</span>}
                        <span>🕐 {fmtTime(row.createdAt)}</span>
                      </div>
                      {row.message && <p className="text-xs line-clamp-1" style={{ color: '#94a3b8' }}>{row.message}</p>}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                      <button onClick={() => setDetailRow(row)} className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }}>{Icons.eye}</button>
                      <ContactActions phone={row.phone} email={row.email} />
                      <button onClick={() => setDeleteId(row._id)} className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>{Icons.trash}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}</div>
      )}
      {deleteId && <DeleteModal onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={delLoading} />}
      {detailRow && <DetailModal row={detailRow} onClose={() => setDetailRow(null)} />}
    </div>
  );
}

// ─── QUOTES VIEW ──────────────────────────────────────────────────────────────
const QUOTE_COLS = [
  { key: 'fullName', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' },
  { key: 'companyName', label: 'Company' }, { key: 'productName', label: 'Product' },
  { key: 'message', label: 'Message' }, { key: 'status', label: 'Status' }, { key: 'createdAt', label: 'Date' },
];

function QuotesView() {
  const [data, setData]         = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [delLoading, setDelLoading] = useState(false);
  const [search, setSearch]     = useState('');
  const [detailRow, setDetailRow] = useState(null);

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try { const r = await fetch(`${API}/quotes`); if (!r.ok) throw new Error(); const j = await r.json(); setData(j.data || []); }
    catch { setError('Failed to load data. Is the server running?'); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async () => {
    setDelLoading(true);
    try { await fetch(`${API}/quotes/${deleteId}`, { method: 'DELETE' }); setData(d => d.filter(x => x._id !== deleteId)); } catch {}
    setDelLoading(false); setDeleteId(null);
  };

  const filtered = data.filter(r => !search || [r.fullName, r.email, r.companyName, r.productName].some(v => v?.toLowerCase().includes(search.toLowerCase())));
  const grouped  = filtered.reduce((acc, row) => { const k = toDateKey(row.createdAt); if (!acc[k]) acc[k] = []; acc[k].push(row); return acc; }, {});
  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div><h2 className="text-lg font-bold" style={{ color: '#f1f5f9' }}>Quote Requests</h2><p className="text-xs mt-0.5" style={{ color: '#475569' }}>{data.length} total records</p></div>
        <div className="flex flex-wrap items-center gap-2">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" className="px-3 py-1.5 rounded-lg text-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9', width: 200 }} onFocus={e => e.target.style.border = '1px solid rgba(245,158,11,0.4)'} onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'} />
          <ExportBar data={filtered} filename="quotes" columns={QUOTE_COLS} />
        </div>
      </div>
      {loading ? <Spinner /> : error ? <div className="text-center py-12 text-sm" style={{ color: '#ef4444' }}>{error}</div> : filtered.length === 0 ? <EmptyState text="No quote requests found." /> : (
        <div>{sortedDates.map(dk => (
          <div key={dk}>
            <DateGroupHeader dateKey={dk} count={grouped[dk].length} />
            <div className="space-y-2">
              {grouped[dk].map(row => (
                <div key={row._id} className="rounded-xl px-5 py-4 transition-all cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }} onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(168,85,247,0.2)'} onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'} onClick={() => setDetailRow(row)}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-semibold text-sm" style={{ color: '#f1f5f9' }}>{row.fullName}</span>
                        <StatusBadge status={row.status} />
                        {row.productName && <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.2)' }}>{row.productName}</span>}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs mb-1" style={{ color: '#64748b' }}>
                        {row.companyName && <span>🏢 {row.companyName}</span>}
                        {row.phone && <span>📞 {row.phone}</span>}
                        <span>🕐 {fmtTime(row.createdAt)}</span>
                      </div>
                      {row.message && <p className="text-xs line-clamp-1" style={{ color: '#94a3b8' }}>{row.message}</p>}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
                      <button onClick={() => setDetailRow(row)} className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.2)' }}>{Icons.eye}</button>
                      <ContactActions phone={row.phone} email={row.email} />
                      <button onClick={() => setDeleteId(row._id)} className="flex items-center justify-center w-7 h-7 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}>{Icons.trash}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}</div>
      )}
      {deleteId && <DeleteModal onConfirm={handleDelete} onCancel={() => setDeleteId(null)} loading={delLoading} />}
      {detailRow && <DetailModal row={detailRow} onClose={() => setDetailRow(null)} />}
    </div>
  );
}

// ─── DASHBOARD HOME ───────────────────────────────────────────────────────────
function DashboardHome({ setActiveNav }) {
  const [counts, setCounts] = useState({ products: 0, enquiries: 0, quotes: 0, todayPI: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/product-inquiries`).then(r => r.json()).catch(() => ({ total: 0, data: [] })),
      fetch(`${API}/enquiry`).then(r => r.json()).catch(() => ({ total: 0 })),
      fetch(`${API}/quotes`).then(r => r.json()).catch(() => ({ total: 0 })),
    ]).then(([p, e, q]) => {
      const todayPI = (p.data || []).filter(r => toDateKey(r.createdAt) === todayKey()).length;
      setCounts({ products: p.total || 0, enquiries: e.total || 0, quotes: q.total || 0, todayPI });
      setLoading(false);
    });
  }, []);

  const h = new Date().getHours();
  const greeting = h < 12 ? 'Morning' : h < 17 ? 'Afternoon' : 'Evening';

  const stats = [
    { label: 'Product Inquiries', value: counts.products, sub: `${counts.todayPI} today`, color: '#f59e0b', nav: 'Products',  icon: Icons.products },
    { label: 'General Enquiries', value: counts.enquiries, sub: 'total',  color: '#10b981', nav: 'Enquiries', icon: Icons.clients },
    { label: 'Quote Requests',    value: counts.quotes,    sub: 'total',  color: '#a855f7', nav: 'Quotes',    icon: Icons.contact },
  ];

  return (
    <div>
      <div className="rounded-2xl px-6 py-5 mb-6 flex items-center justify-between overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg,#1e3a5f 0%,#1e2d4a 60%,#0f2027 100%)', border: '1px solid rgba(245,158,11,0.2)' }}>
        <div className="absolute right-0 top-0 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#f59e0b,transparent)', transform: 'translate(30%,-30%)' }} />
        <div>
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#f59e0b' }}>Welcome back</p>
          <h2 className="text-xl font-bold" style={{ color: '#f8fafc' }}>Good {greeting}, Admin!</h2>
          <p className="text-sm mt-1" style={{ color: '#64748b' }}>Here's your platform overview for today.</p>
        </div>
        <div className="hidden sm:block text-5xl select-none opacity-20">⚙️</div>
      </div>
      {loading ? <Spinner /> : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(s => (
            <button key={s.label} onClick={() => setActiveNav(s.nav)}
              className="rounded-xl px-5 py-5 flex items-center gap-4 text-left transition-all duration-150 w-full"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => { e.currentTarget.style.border = `1px solid ${s.color}30`; e.currentTarget.style.background = `${s.color}08`; }}
              onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
              <div className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                <span style={{ color: s.color }}>{s.icon}</span>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs" style={{ color: '#64748b' }}>{s.label}</p>
                <p className="text-xs mt-0.5" style={{ color: s.color, opacity: 0.7 }}>{s.sub}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('arman_admin_auth') !== 'true') navigate('/armanadminlogin');
  }, [navigate]);

  const handleLogout = () => { sessionStorage.removeItem('arman_admin_auth'); navigate('/'); };

  const renderContent = () => {
    switch (activeNav) {
      case 'Products':  return <ProductsView />;
      case 'Enquiries': return <EnquiriesView />;
      case 'Quotes':    return <QuotesView />;
      default:          return <DashboardHome setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'Georgia', serif", background: '#0f172a' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {sidebarOpen && <div className="fixed inset-0 z-20 bg-black bg-opacity-60 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* SIDEBAR */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 flex flex-col w-64 h-full transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ background: 'linear-gradient(180deg,#0f172a 0%,#1a2744 100%)', borderRight: '1px solid rgba(245,158,11,0.15)' }}>
        <div className="flex items-center gap-3 px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', boxShadow: '0 4px 12px rgba(245,158,11,0.4)' }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: '#f8fafc' }}>Arman</p>
            <p className="text-xs tracking-wider" style={{ color: '#64748b' }}>Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(item => {
            const active = activeNav === item.label;
            return (
              <button key={item.label} onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150"
                style={{ background: active ? 'rgba(245,158,11,0.15)' : 'transparent', color: active ? '#f59e0b' : '#94a3b8', border: active ? '1px solid rgba(245,158,11,0.25)' : '1px solid transparent' }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ color: active ? '#f59e0b' : '#64748b' }}>{item.icon}</span>
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#f59e0b' }} />}
              </button>
            );
          })}
        </nav>
        <div className="px-3 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3 px-3 pt-4 pb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold" style={{ background: 'linear-gradient(135deg,#1e40af,#3b82f6)', color: '#fff' }}>A</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: '#f1f5f9' }}>armanadmin</p>
              <p className="text-xs truncate" style={{ color: '#475569' }}>Administrator</p>
            </div>
          </div>
          <button onClick={() => setShowLogout(true)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150" style={{ color: '#ef4444', border: '1px solid transparent' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.border = '1px solid rgba(239,68,68,0.2)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.border = '1px solid transparent'; }}>
            {Icons.logout}<span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="flex items-center justify-between px-4 sm:px-6 py-4 flex-shrink-0"
          style={{ background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(245,158,11,0.12)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg" style={{ color: '#94a3b8' }}>{Icons.menu}</button>
          <div>
            <h1 className="text-lg font-bold" style={{ color: '#f1f5f9' }}>{activeNav}</h1>
            <p className="text-xs" style={{ color: '#475569' }}>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg" style={{ color: '#94a3b8' }} onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>{Icons.bell}<span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: '#ef4444' }} /></button>
            <button onClick={() => setShowLogout(true)} className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all" style={{ color: '#ef4444', border: '1px solid rgba(239,68,68,0.25)' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>{Icons.logout} Logout</button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6" style={{ background: '#0f172a' }}>{renderContent()}</main>
      </div>

      {/* LOGOUT MODAL */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="w-full max-w-sm rounded-2xl overflow-hidden" style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.6)' }}>
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg,#ef4444,#f59e0b)' }} />
            <div className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: 'rgba(239,68,68,0.15)', border: '2px solid rgba(239,68,68,0.3)', color: '#ef4444' }}>{Icons.logout}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#f1f5f9' }}>Confirm Logout</h3>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>You'll be redirected to the home page.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowLogout(false)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}>Cancel</button>
                <button onClick={handleLogout} className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background: 'linear-gradient(90deg,#ef4444,#dc2626)', color: '#fff', boxShadow: '0 4px 14px rgba(239,68,68,0.35)' }}>Yes, Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}