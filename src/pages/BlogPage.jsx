import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

const posts = [
  {
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Buying your first home is exciting but can be overwhelming. Here are essential tips to guide you through the process.",
    date: "Mar 15, 2026",
    author: "David Wilson",
    category: "Buying",
  },
  {
    title: "Understanding Property Valuation in 2026",
    excerpt: "Learn how properties are valued and what factors influence pricing in today's dynamic real estate market.",
    date: "Feb 28, 2026",
    author: "Jessica Lee",
    category: "Market Insights",
  },
  {
    title: "The Guide to Smart Home Investments",
    excerpt: "Discover strategies for making profitable real estate investments while minimizing risks and maximizing returns.",
    date: "Feb 10, 2026",
    author: "Robert Martinez",
    category: "Investment",
  },
  {
    title: "Renovation Tips That Boost Property Value",
    excerpt: "Not all renovations are equal. Find out which home improvements give you the best return on investment.",
    date: "Jan 22, 2026",
    author: "Amanda Taylor",
    category: "Home Improvement",
  },
  {
    title: "Navigating the Rental Market: A Complete Guide",
    excerpt: "Whether you're a tenant or landlord, this comprehensive guide covers everything you need to know about rentals.",
    date: "Jan 5, 2026",
    author: "David Wilson",
    category: "Renting",
  },
  {
    title: "Top Neighborhoods to Watch in 2026",
    excerpt: "Our experts identify emerging neighborhoods with great potential for both living and investment.",
    date: "Dec 18, 2025",
    author: "Jessica Lee",
    category: "Market Insights",
  },
];

const BlogPage = () => {
  const Card = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    padding: theme.spacing(3),
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
  }));

  const CategoryBadge = styled(Box)(({ theme }) => ({
    display: "inline-block",
    backgroundColor: "#E6F0FF",
    color: "#0F1B4C",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: theme.spacing(2),
  }));

  return (
    <>
      <PropertyBanner
        title="Our Blog"
        subtitle="Insights, tips, and guides from our real estate experts."
      />

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5FAFE" }}>
        <Container>
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.title}>
                <Card>
                  <CategoryBadge>{post.category}</CategoryBadge>
                  <Typography
                    sx={{ fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold", color: "#000339", mb: 1 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#5A6473", fontSize: "14px", lineHeight: 1.7, mb: 3 }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, color: "#7A7A7E", fontSize: "13px", flexWrap: "wrap" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 14 }} />
                      {post.date}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <PersonIcon sx={{ fontSize: 14 }} />
                      {post.author}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlogPage;
