import { INavData } from '@coreui/angular';


export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/home/dashboard',
    icon: 'icon-puzzle',
  },
  {
    name: 'Socièté',
    url: '/home/superadmin',
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
        name: 'User',
        url: '/home/user',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Add User',
            url: '/home/superadmin/adduser',
            icon: 'icon-drop',
          },
          {
            name: 'List User',
            url: '/home/superadmin/listuser',
            icon: 'icon-drop',
          },
        ],
  },
  {
    name: 'Produit',
    url: '/home/produit',
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
    name: 'Categorie',
    url: '/home/superadmin',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Add Categorie',
        url: '/home/categorie/addcategorie',
        icon: 'icon-puzzle',
      },
      {
        name: 'List Categories',
        url: '/home/categorie/listcategorie',
        icon: 'icon-puzzle',
      },
    ],
  },
  {
    name: 'Fournisseur',
    url: '/home/fournisseur',
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
    name: 'Activity',
    url: '/home/superadmin',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'List Activity',
        url: '/home/superadmin/activity/listactivity',
        icon: 'icon-drop',
      },
      {
        name: 'Add Activity',
        url: '/home/superadmin/activity/addactivity',
        icon: 'icon-drop',
      },
    ],
  },
  {
    name: 'Setting',
    url: '/home/setting',
    icon: 'icon-puzzle',
  },
  {
    divider: true,
  },
];
