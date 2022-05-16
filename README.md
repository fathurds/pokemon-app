## Pokemon App Project
Project ini ditunjukan untuk tugas di Alterra Academy. Saya membuat project ini menggunakan NextJs dan css framework menggunakan Tailwindcss.
Ada 3 fitur utama yaitu:
1. Home
2. Pokemon
3. My Pokemon

# Home
Pada halaman home berisi list pokemon yang ada. Di halaman ini kita bisa memilih pokemon mana yang ingin dilihat datanya. Ada 2 tampilan untuk halaman ini yaitu untuk mobile dan untuk dekstop. Pada saat mode dekstop, ketika kursor berada di salah satu pokemon maka bagian pada pokemon tersebut akan membesar (hover).
Halaman ini menggambil data dari API
```bash
https://pokeapi.co/api/v2/pokemon/
```

# Detail Pokemon
Pada halaman ini berisi status, tipe, berat dan tinggi pokemon. Pada halaman ini juga bisa menekan tombol next dan previous untuk menuju pada halaman pokemon selanjutnya. Di halaman ini juga ada tombol catch yang fungsinya untuk menangkap pokemon dan memasukannya ke halaman my pokemon

# My Pokemon
Pada halaman ini berisi mengenai pokemon yang kita tangkap. Data di sini didapat dari localStorage
