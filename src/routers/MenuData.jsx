/********** pages ************/

import Home from "../pages/dashboard/home";
import ListDemande from "../pages/dashboard/demande/ListDemande";
import CreateDemande from "../pages/dashboard/demande/CreateDemande";
import ListCongecalculee from "../pages/dashboard/congecalculee/ListCongecalculee"
import  {
  ListUserPage,
} from "../pages/dashboard/administration/user-management";
// import UserManagement2 from "../pages/dashboard/administration/__user-management";
import  {
  ListDepartmentPage,
} from "../pages/dashboard/administration/department-management/index";
// import Marche from "../pages/dashboard/marche";
import Attachment from "../pages/dashboard/__attachment";
import {
  CreateSupplierPage,
  ListSupplierPage,
} from "../pages/dashboard/supplier";
import  { ListArticlePage } from "../pages/dashboard/article";
import { ListMarchePage , CreateMarchePage} from "../pages/dashboard/marche";
import { ListAttachmentPage , CreateAttachmentPage , DecomptePage , DecompteDefinitifPage} from "../pages/dashboard/attachment";

/********** icons ************/
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
//import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
//import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import HistoryIcon from '@mui/icons-material/History';
import FeedIcon from '@mui/icons-material/Feed';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { user_role } from "../global";
import { useSelector } from "react-redux";


export const MenuData = [
  {
    name: "Accueil",
    icon: <HomeRoundedIcon />,
    path: "",
    component: <Home />,
    permissions: [user_role.RH],
  },
  {
    name: "Administration",
    icon: <SettingsRoundedIcon />,
    path: "administration",
    component: <h1>administration</h1>,
    permissions: [user_role.RH],
    children: [
      // {
      //   name: "Gestion Utilisateur",
      //   path: "users-management2",
      //   component: <UserManagement2 />,
      // },
      {
        name: "Gestion Utilisateur",
        path: "users-management",
        component: <ListUserPage />,
      },
      // {
      //   name: "Gestion Département",
      //   path: "department-management",
      //   component: <ListDepartmentPage />,
      // },
    ],
  },
  {
    name: "Marchés",
    icon: <WorkRoundedIcon />,
    path: "marche",
    component: <br />,
    permissions: [user_role.RH , user_role.chefdep],
    children: [
      {
        name: "Liste des marchés",
        path: "list-marche",
        component: <ListMarchePage />,
        permissions: [user_role.RH , user_role.chefdep],

      },
      {
        name: "Creation Marché",
        path: "creation-marche",
        component: <CreateMarchePage/>,
        permissions: [user_role.RH  , user_role.DEPARTMENT ],
      },
      {
        name: "Liste des articles",
        path: "list-article",
        component: <ListArticlePage />,
        permissions: [user_role.RH , user_role.DEPARTMENT],
     
      },
    ],
  },
  {
    name: "Fournisseur",
    icon: <WarehouseRoundedIcon />,
    path: "fournisseur",
    component: <h1>Fournisseur</h1>,
    permissions: ["ADMIN"],
    children: [
      {
        name: "Creation fournisseur",
        path: "creation-fournisseur",
        component: <CreateSupplierPage />,
        permissions: ["ADMIN"],
      },
      {
        name: "Liste des fournisseur",
        path: "list-fournisseur",
        component: <ListSupplierPage />,
        permissions: ["ADMIN"],
      },
    ],
  },
  {
    name: "Attachement",
    icon: <AttachEmailRoundedIcon />,
    path: "attachement",
    component: <h1>Attachement</h1>,
    permissions: ["DEPARTMENT"],
    children: [
      {
        name: "Creation attachement",
        path: "creation-attachement",
        component: <CreateAttachmentPage/>,
        permissions: [user_role.RH ],
      },
      {
        name: "Liste des attachement",
        path: "list-attachement",
        component:  <ListAttachmentPage/> ,
        permissions: [user_role.RH , user_role.chefdep],
      },
    
    ],
  },
  {
    name: "Demandes",
    icon: <EditCalendarIcon />,
    path: "demande",
    component: <CreateDemande />,
    permissions: [user_role.RH , user_role.agentnor],
  },
  {
    name: "Historique",
    icon: < HistoryIcon />,
    path: "historique",
    component: <ListDemande enAttente={false} />,
    permissions: [user_role.RH , user_role.chefdep, user_role.agentnor],
    // children: [
    //   {
    //     name: "Liste des demandes",
    //     path: "list-demandes",
    //     component:  <ListDemande enAttente={false} /> ,
    //     permissions: [user_role.RH , user_role.chefdep],
    //   },
     
    // ],
  },
  {
    name: "VoirDemandes",
    icon: <FeedIcon />,
    path: "voirdemande",
    component: <br />,
    permissions: [user_role.RH , user_role.DEPARTMENT],
    children: [
      {
        name: "Les Demandes ",
        path: "lesdemandes",
        component: <ListDemande enAttente={true} />,
        permissions: [user_role.chefdep],

      },
     
    ],
  },
  {
    name: "Solde-Conge",
    icon: <CalendarMonthIcon />,
    path: "solde-conge",
    component: <ListCongecalculee/> ,
    permissions: ["ADMIN", user_role.agentnor],
   
  },
];
