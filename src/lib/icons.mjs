const P = (d) => d;

export const ICONS = {
  surface: '<path d="M4 4h6M4 4v6M4 4l6 6"/><path d="M20 20h-6M20 20v-6M20 20l-6-6"/>',
  capacite: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><path d="M16.5 5.6a3.2 3.2 0 0 1 0 6"/><path d="M18 14c2.1.9 3.5 2.9 3.5 6"/>',
  type: '<path d="M3 21V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v15"/><path d="M2 21h20"/><path d="M8 3v12M16 3v12"/>',
  secteur: '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  son: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  lumiere: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z"/>',
  piano: '<rect x="2" y="6" width="20" height="12" rx="1.5"/><path d="M7 6v7M12 6v7M17 6v7"/>',
  regie: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1.5 14h5M9.5 8h5M17.5 16h5"/>',
  regisseur: '<circle cx="12" cy="8" r="3.8"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  loges: '<path d="M4 21V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v17"/><path d="M2 21h18"/><circle cx="13.5" cy="12" r="1"/>',
  climatisation: '<path d="M12 2v20M2.5 12h19"/><path d="m5.2 5.2 13.6 13.6M18.8 5.2 5.2 18.8"/>',
  wifi: '<path d="M4.5 12.3a11 11 0 0 1 15 0"/><path d="M8 15.8a6 6 0 0 1 8 0"/><circle cx="12" cy="19.4" r="1.2"/>',
  parking: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M9 17V7h3.8a3 3 0 0 1 0 6H9"/>',
  scene_eq: '<path d="M2 20h20"/><path d="M5 20V9l7-5 7 5v11"/><path d="M9.5 20v-5h5v5"/>',
  miroirs: '<rect x="5" y="2.5" width="14" height="19" rx="7"/><path d="M9.5 7.5c-1.1 1.6-1.1 4.4 0 6"/>',
  rideaux: '<path d="M3 3h18"/><path d="M6.5 3v18c3 0 4-3 4-9s-1-9-4-9"/><path d="M17.5 3v18c-3 0-4-3-4-9s1-9 4-9"/>',
  gradins: '<path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"/><path d="M4 14.5h16"/><path d="M6.5 18v2.5M17.5 18v2.5"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/>',
  cuisine: '<path d="M5 2v7a2 2 0 0 0 4 0V2"/><path d="M7 11v11"/><path d="M17.5 2c-1.6 2-2.2 4.2-2.2 6.2 0 2 1 3.3 2.2 3.3s2.2-1.3 2.2-3.3c0-2-.6-4.2-2.2-6.2z"/><path d="M17.5 11.5V22"/>',
  defaut: '<circle cx="12" cy="12" r="8.5"/>',
};

export function icon(id) {
  return ICONS[id] || ICONS.defaut;
}
