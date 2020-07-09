import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Administration',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'list Societé',
        url: '/home/superadmin/listsociete',
        icon: 'icon-drop',
      },
      {
        name: 'Add Societé',
        url: '/home/superadmin/addsociete',
        icon: 'icon-drop',
      },
    ],
  },
  {
    name: 'Categorie',
    icon: 'icon-puzzle',
    children:[
      {
        name: 'Add Categorie',
        url: '/home/categorie/addcategorie',
        icon: 'icon-puzzle'
      },
      {
        name: 'List Categories',
        url: '/home/categorie/listcategorie',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Produit',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Add Produit',
        url: '/home/produit/addproduit',
        icon: 'icon-puzzle',
      },
      {
        name: 'List Produit',
        url: '/home/produit/listproduit',
        icon: 'icon-puzzle',
      },
    ],
  },
  {
    name: 'Fournisseur',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Add Fournisseur',
        url: '/home/fournisseur/add-fournisseur',
        icon: 'icon-puzzle',
      },
      {
        name: 'List Fournisseur',
        url: '/home/fournisseur/list-fournisseur',
        icon: 'icon-puzzle',
      },
    ],
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor',
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor',
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor',
      },
    ],
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart',
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW',
        },
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star',
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7',
        },
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star',
      },
    ],
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell',
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell',
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell',
      },
    ],
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    divider: true,
  },
];
