<template>
  <div class="sidebar ms-2 mt-2">
    <div class="flex-shrink-0 bg-white">
      <ul class="list-main list-unstyled">
        <li
            class="list-header"
            v-for="(category, index) in categories"
            :key="index"
        >
          {{ category.name }}
          <ul
              class="list-under list-unstyled"
              v-if="category.subcategories"
          >
            <li
                class="item"
                v-for="(subcategory, subindex) in category.subcategories"
                :key="subindex"
            >
              <router-link
                  active-class="active"
                  :to="subcategory.routerLink"
              >
                {{ subcategory.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div
          class="sidebar-footer link-dark border-top"
          @click="logout"
      >
        Log Out
      </div>
    </div>
  </div>
</template>

<script setup>


import {useAuth} from "@/composables/useAuth";

const {logout} = useAuth();

const categories = [
  {
    name: "Products",
    subcategories: [
      {
        name: "List",
        routerLink: "products/list",
      },
      {
        name: "Create",
        routerLink: "products/create",
      },
    ],
  },
  {
    name: "User Management",
    subcategories: [
      {
        name: "Users",
        routerLink: "/user-management/users",
      },
    ],
  },
]
</script>

<style scoped lang="scss">
@media (min-width: 600px) {
  .list-main {
    flex-direction: column;
    padding-left: 10px;

    .list-header {
      flex-direction: column;
    }

    .list-under {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .sidebar {
      font-size: 0.9rem;
    }
  }
}

@media (max-width: 700px) {
  .list-main {
    display: flex;
    flex-direction: row;
    padding-left: 20px;

    .list-header {
      display: flex;
      flex-direction: row;
    }

    .list-under {
      display: inline-block !important;
      margin-right: 2rem;
    }

    .sidebar {
      font-size: 0.827rem;
    }
  }
}

.sidebar-header {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  padding-bottom: 8px;
}

.list-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #f9bc2e;
  margin-top: 12px;
  cursor: default;
}

.list-under {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    width: 100%;
  }
}

.item {
  position: relative;
  display: inline-block;
  margin-top: 7px;

  a {
    display: inline-block;
    width: 100%;
    position: relative;
    z-index: 1;
    color: #515251;
    text-decoration: none;
    box-sizing: border-box;
    padding: 1px 9.5px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 1px solid transparent;
      pointer-events: none;
      border-radius: 8px;
      background-color: transparent;
      z-index: -1;
    }

    &.active::before {
      border: 1px solid #79747e;
      background-color: #fffbfe;
    }
  }
}

.sidebar-footer {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  cursor: pointer;
}
</style>
