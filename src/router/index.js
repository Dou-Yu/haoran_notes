import { createRouter, createWebHashHistory } from "vue-router";
import BookLayout from "@/layout/BookLayout";
import AuthLayout from "@/layout/AuthLayout";
import Book from "@/views/Book";
import Login from "@/views/auth/Login";

const routes = [
  {
    path: "/",
    name: "BookLayout",
    component: BookLayout,
    redirect: "book",
    children: [
      {
        path: "/book",
        component: Book
      }
    ]
  },
  {
    path: "/auth",
    name: "AuthLayout",
    component: AuthLayout,
    redirect: "login",
    children: [
      {
        path: "/login",
        component: Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
