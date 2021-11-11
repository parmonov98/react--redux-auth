import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  TOGGLE_SIDEBAR,
} from '../actions/types';
import { AlignLeft, DollarSign, Feather, Filter, Grid, Map, Sidebar, Square, TrendingDown, TrendingUp, Truck, UserCheck, Users, UserX } from 'react-feather';

// var UserCheckIcon = React.createClass({
//   render: function () {
//     return (
//       <UserCheck />
//     );
//   }
// });
const initalState = {
  isExpanded: true,
  isShown: true,
  menu: [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
      icon_tag: <Filter color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Xodimlar",
      route: "/dashboard",
      icon: null,
      is_active: false,
      is_visible: true,
      is_section: true,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Foydalanuvchilar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check align-middle"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`,
      icon_tag: <Users color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/users",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Xodimlar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-middle"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      icon_tag: <UserCheck color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/employees",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Oyliklar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      icon_tag: <DollarSign color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/salaries",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Ishlab chiqarish & Skladlar",
      icon: null,
      is_active: false,
      route: "/producing-product",
      is_visible: true,
      is_section: true,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Mahsulot tayyorlash",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left align-middle"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>`,
      icon_tag: <AlignLeft color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/producing-product",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Mahsulotlar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square align-middle"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`,
      icon_tag: <Square color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/products",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Materiallar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid align-middle"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      icon_tag: <Grid color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/materials",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Tashkilotlar & Transport",
      icon: null,
      is_active: false,
      route: "/suppliers",
      is_visible: true,
      is_section: true,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Yetkazuvchilar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar align-middle"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`,
      icon_tag: <Sidebar color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/suppliers",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Klient tashkilotlar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map align-middle"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
      icon_tag: <Map color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/clients",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Transportlar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
      icon_tag: <Truck color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/transports",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Harajat va Kirimlar",
      icon: null,
      is_active: false,
      route: "/sales",
      is_visible: true,
      is_section: true,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "Sotish",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up align-middle"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
      icon_tag: <TrendingUp color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/sales",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "To'lov",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down align-middle"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`,
      icon_tag: <TrendingDown color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/expenses",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
    {
      name: "To'lov shablonlar",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee align-middle"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
      icon_tag: <Feather color="rgba(233, 236, 239, 0.5)" size={18} />,
      is_active: false,
      route: "/expense-templates",
      is_visible: true,
      is_section: false,
      belongs_to: ['superadmin', 'director', 'manager', 'storekeeper', 'accountant']
    },
  ],
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isShown: true
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        isShown: false
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isExpanded: !state.isExpanded
      };
    default:
      return state;
  }
}
