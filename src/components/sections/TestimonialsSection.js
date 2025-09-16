import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  PlayArrow,
  Pause,
} from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pengguna Individu",
    // avatar: "/avatars/user1.jpg",
    rating: 5,
    content:
      "Sejak pakai Setorin.id, sampah rumah tangga jadi punya nilai ekonomis. Prosesnya mudah, penjemputan tepat waktu, dan pembayaran cepat. Sudah terkumpul 150.000 poin!",
    location: "Jakarta Selatan",
  },
  {
    id: 2,
    name: "Ibu Siti Rahayu",
    role: "Ketua RW 05",
    // avatar: "/avatars/user2.jpg",
    rating: 5,
    content:
      "Program yang sangat bermanfaat untuk lingkungan kami. Warga jadi lebih semangat memilah sampah dan lingkungan menjadi lebih bersih. Revenue cluster sudah mencapai Rp 2.5 juta!",
    location: "Depok",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    role: "Pengepul",
    // avatar: "/avatars/user3.jpg",
    rating: 4,
    content:
      "Platform yang membantu usaha saya berkembang. Sekarang dapat sumber sampah teratur dan kualitasnya terjaga karena sudah dipilah oleh user. Omzet naik 40% sejak gabung.",
    location: "Bekasi",
  },
  {
    id: 4,
    name: "Diana Putri",
    role: "Environmental Activist",
    // avatar: "/avatars/user4.jpg",
    rating: 5,
    content:
      "Inovasi yang sangat positif untuk lingkungan. Tidak hanya mengurangi timbunan sampah, tetapi juga menciptakan ekonomi sirkular yang berkelanjutan. Sangat recommended!",
    location: "Bandung",
  },
  {
    id: 5,
    name: "Rudi Hermawan",
    role: "Pengguna Premium",
    // avatar: "/avatars/user5.jpg",
    rating: 5,
    content:
      "Aplikasi yang sangat user-friendly. Fitur trackingnya memudahkan saya memantau proses penjemputan. Penghasilan tambahan system-nya juga menarik, sudah menukarkan poin dengan voucher belanja.",
    location: "Tangerang",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const theme = useTheme();

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Stats section states
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const statsData = [
    { key: "users", label: "Pengguna Aktif", value: 10, suffix: "K+" },
    { key: "waste", label: "Ton Sampah Terkelola", value: 50, suffix: "K+" },
    {
      key: "collectors",
      label: "Pengepul Terdaftar",
      value: 25,
      suffix: "K+",
    },
    { key: "satisfaction", label: "Kepuasan Pengguna", value: 95, suffix: "%" },
  ];

  const formatStat = (key, value, suffix = "") => {
    const safeValue = Number(value) || 0;
    if (suffix === "%") return `${safeValue}${suffix}`;
    if (key === "waste") return `${safeValue.toLocaleString("id-ID")}${suffix}`;
    return `${safeValue.toLocaleString("id-ID")}${suffix}`;
  };

  // Items to show based on screen size
  const getItemsToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3; // desktop
  };
  const itemsToShow = getItemsToShow();

  // Auto-carousel effect
  useEffect(() => {
    if (!isAutoPlay) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => setCurrentIndex(index);
  const toggleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  // Get visible testimonials with wrapping
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };
  const visibleTestimonials = getVisibleTestimonials();

  // Observer untuk animasi stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          statsData.forEach((stat) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              const currentValue = Math.floor(progress * end);

              setAnimatedStats((prev) => ({
                ...prev,
                [stat.key]: currentValue,
              }));

              if (currentStep >= steps) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [isStatsVisible]);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Apa Kata Mereka?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Testimoni dari pengguna yang telah merasakan manfaat Setorin.id
          </Typography>
        </Box>

        {/* Carousel */}
        <Box sx={{ position: "relative", mb: 4 }}>
          {/* Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { sm: -30, md: -50 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              boxShadow: 3,
              zIndex: 2,
              display: { xs: "none", sm: "flex" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { sm: -30, md: -50 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "background.paper",
              boxShadow: 3,
              zIndex: 2,
              display: { xs: "none", sm: "flex" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 4 },
            }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={`${testimonial.id}-${index}`} sx={{ borderRadius: 3 }}>
                <CardContent
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                      mx: "auto",
                      mb: 2,
                      border: "3px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role} • {testimonial.location}
                  </Typography>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size={isMobile ? "small" : "medium"}
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 4, md: 5 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    “{testimonial.content}”
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
            <IconButton onClick={handlePrev}>
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: { xs: 8, md: 12 },
                  height: { xs: 8, md: 12 },
                  borderRadius: "50%",
                  bgcolor: currentIndex === index ? "primary.main" : "grey.300",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Stats Section */}
        <Box
          ref={statsRef}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
            textAlign: "center",
            p: { xs: 3, md: 4 },
            bgcolor: "grey.50",
            borderRadius: 3,
          }}
        >
          {statsData.map((stat, index) => (
            <Box
              key={stat.key}
              sx={{
                transform: isStatsVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isStatsVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <Typography
                variant="h3"
                color="primary.main"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                {formatStat(stat.key, animatedStats[stat.key], stat.suffix)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
