import { create } from "zustand";

export const useAnimationStore = create(() => ({
  // Animasi fade masuk sambil bergerak ke atas
  fadeInUp: {
    hidden: { opacity: 0, y: 30 }, // posisi awal: transparan + turun 30px
    visible: {
      opacity: 1, // menjadi terlihat
      y: 0, // naik ke posisi normal
      transition: { duration: 0.6, ease: "easeOut" }, // durasi 0.6 detik, easing halus
    },
  },

  // Animasi fade masuk sambil bergerak dari kiri
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 }, // posisi awal: transparan + bergeser 30px ke kiri
    visible: {
      opacity: 1, // terlihat penuh
      x: 0, // geser ke posisi normal
      transition: { duration: 0.6, ease: "easeOut" }, // animasi smooth
    },
  },

  // Animasi pop-in (muncul dengan scaling)
  popIn: {
    hidden: { opacity: 0, scale: 0.9 }, // posisi awal: kecil (90%) + transparan
    visible: {
      opacity: 1, // terlihat penuh
      scale: 1, // ukuran normal
      transition: { duration: 0.5, ease: "easeOut" }, // cepat dan smooth
    },
  },

  // Animasi fade masuk dari bawah lebih jauh (40px)
  fadeUp: {
    hidden: { opacity: 0, y: 40 }, // posisi awal: transparan + turun 40px
    visible: {
      opacity: 1, // terlihat
      y: 0, // ke posisi normal
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },

  // Container untuk membuat efek "stagger" (anak-anak muncul bergantian)
  staggerContainer: {
    hidden: {}, // tidak ada perubahan awal
    visible: {
      transition: { staggerChildren: 0.15 }, // setiap child muncul dengan jeda 0.15 detik
    },
  },

  // Animasi khusus untuk progress bar (lebar dari 0% ke value)
  progressVariants: {
    hidden: { width: "0%" }, // awal lebar 0
    visible: (value) => ({
      // fungsi menerima value (persentase)
      width: `${value}%`, // lebar sesuai persentase
      transition: { duration: 1, ease: "easeInOut" }, // durasi 1 detik, smooth
    }),
  },

  // Variants untuk container utama (membungkus semua card)
  containerVariants: {
    hidden: { opacity: 0 }, // Saat awal, container tidak terlihat
    visible: {
      opacity: 1, // Saat muncul, opacity jadi penuh
      transition: {
        staggerChildren: 0.2, // Memberikan jeda 0.2 detik antar anak (card) saat animasi
      },
    },
  },

  // Variants untuk animasi setiap card
  cardVariants: {
    hidden: {
      opacity: 0, // Awalnya transparan
      y: 40, // Turun 40px dari posisi normal
      scale: 0.95, // Sedikit lebih kecil dari ukuran normal
    },
    visible: {
      opacity: 1, // Opacity penuh
      y: 0, // Kembali ke posisi normal
      scale: 1, // Kembali ke ukuran normal
      transition: {
        duration: 0.6, // Durasi animasi 0.6 detik
        ease: "easeOut", // Pergerakan mulai cepat lalu melambat
      },
    },
  },

  // Variants untuk judul halaman
  titleVariants: {
    hidden: {
      opacity: 0, // Transparan
      y: -20, // Naik 20px dari posisi normal
    },
    visible: {
      opacity: 1, // Terlihat penuh
      y: 0, // Kembali ke posisi normal
      transition: {
        duration: 0.6, // Durasi 0.6 detik
        ease: "easeOut", // Efek pergerakan smooth
      },
    },
  },

  itemVariants: {
    hidden: { opacity: 0, y: 30 }, // Saat belum terlihat: transparan (opacity 0) & turun 30px dari posisi akhir
    visible: {
      opacity: 1, // Saat terlihat: opacity penuh
      y: 0, // Kembali ke posisi normal (tanpa pergeseran vertikal)
      transition: {
        duration: 0.6, // Durasi animasi 0.6 detik
        ease: "easeOut", // Efek easing: mulai cepat lalu melambat di akhir
      },
    },
  },

  iconVariants: {
    hover: {
      scale: 1.2, // Saat hover: membesar 20% dari ukuran normal
      rotate: 8, // Sedikit memutar 8 derajat untuk efek playful
      transition: {
        type: "spring", // Menggunakan animasi pegas untuk efek natural
        stiffness: 300, // Kekakuan pegas (semakin tinggi semakin cepat)
      },
    },
  },

  // Fade sederhana dari bawah
  fadeInVariants: {
    hidden: { opacity: 0, y: 20 }, // posisi awal: transparan + turun 20px
    visible: {
      opacity: 1, // terlihat
      y: 0, // posisi normal
      transition: { duration: 0.6 }, // durasi setengah detik lebih
    },
  },
}));
