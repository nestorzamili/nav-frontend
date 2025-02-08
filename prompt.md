src/
│
├── api/                     # Folder untuk semua API calls
│   ├── auth.ts              # API calls untuk autentikasi (login, logout, refresh token)
│   ├── user.ts              # API calls untuk user management
│   ├── product.ts           # API calls untuk product management
│   ├── customer.ts          # API calls untuk customer management
│   ├── quotation.ts         # API calls untuk quotation management
│   └── index.ts             # Ekspor semua API calls
│
├── components/              # Folder untuk komponen UI yang reusable
│   ├── Navbar/              # Komponen Navbar
│   │   └── Navbar.tsx
│   ├── Sidebar/             # Komponen Sidebar
│   │   └── Sidebar.tsx
│   ├── Layout/              # Komponen Layout yang menggabungkan Navbar dan Sidebar
│   │   └── Layout.tsx
│   └── ...                  # Komponen lainnya
│
├── features/                # Folder untuk fitur-fitur aplikasi
│   ├── auth/                # Fitur autentikasi
│   │   ├── Login.tsx        # Halaman Login
│   │   └── authSlice.ts     # Zustand store untuk autentikasi
│   ├── user/                # Fitur user management
│   │   ├── UserList.tsx     # Halaman daftar user
│   │   ├── UserForm.tsx     # Form untuk menambah/mengedit user
│   │   └── userSlice.ts     # Zustand store untuk user management
│   ├── product/             # Fitur product management
│   │   ├── ProductList.tsx  # Halaman daftar product
│   │   ├── ProductForm.tsx  # Form untuk menambah/mengedit product
│   │   └── productSlice.ts  # Zustand store untuk product management
│   ├── customer/            # Fitur customer management
│   │   ├── CustomerList.tsx # Halaman daftar customer
│   │   ├── CustomerForm.tsx # Form untuk menambah/mengedit customer
│   │   └── customerSlice.ts # Zustand store untuk customer management
│   ├── quotation/           # Fitur quotation management
│   │   ├── QuotationList.tsx# Halaman daftar quotation
│   │   ├── QuotationForm.tsx# Form untuk menambah/mengedit quotation
│   │   └── quotationSlice.ts# Zustand store untuk quotation management
│   └── ...                  # Fitur lainnya
│
├── hooks/                   # Folder untuk custom hooks
│   ├── useAuth.ts           # Hook untuk autentikasi
│   ├── useCsrf.ts           # Hook untuk CSRF token
│   └── ...                  # Hook lainnya
│
├── routes/                  # Folder untuk routing
│   ├── PrivateRoute.tsx     # Komponen untuk route yang membutuhkan autentikasi
│   ├── PublicRoute.tsx      # Komponen untuk route yang tidak membutuhkan autentikasi
│   └── AppRouter.tsx        # Konfigurasi routing utama
│
├── stores/                  # Folder untuk global state management (Zustand)
│   ├── authStore.ts         # Store untuk autentikasi
│   ├── userStore.ts         # Store untuk user management
│   ├── productStore.ts      # Store untuk product management
│   ├── customerStore.ts     # Store untuk customer management
│   ├── quotationStore.ts    # Store untuk quotation management
│   └── index.ts             # Ekspor semua store
│
├── types/                   # Folder untuk tipe data global
│   ├── authTypes.ts         # Tipe untuk autentikasi
│   ├── userTypes.ts         # Tipe untuk user management
│   ├── productTypes.ts      # Tipe untuk product management
│   ├── customerTypes.ts     # Tipe untuk customer management
│   ├── quotationTypes.ts    # Tipe untuk quotation management
│   └── index.ts             # Ekspor semua tipe
│
├── utils/                   # Folder untuk utility functions
│   ├── axiosInstance.ts     # Axios instance dengan interceptors
│   ├── tokenService.ts      # Fungsi untuk mengelola token (access token, refresh token)
│   └── ...                  # Utility lainnya
│
├── App.tsx                  # Komponen utama aplikasi
├── main.tsx                 # Entry point aplikasi
└── index.css                # Global styles