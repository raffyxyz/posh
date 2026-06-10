import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import House from "../Components/House";
import PropertyBanner from "../Components/PropertyBanner";
import { allProperties } from "../properties";

const PropertiesPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = allProperties.filter((p) => {
    const matchesSearch =
      p.address.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.status === filter || p.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <PropertyBanner
        title="Browse Properties"
        subtitle="Explore our complete collection of available properties for sale and rent."
      />

      <Box sx={{ py: 5, backgroundColor: "#F5FAFE" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              size="small"
              placeholder="Search by address or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                minWidth: { xs: "100%", sm: 280 },
                backgroundColor: "#fff",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
            <FormControl
              size="small"
              sx={{
                minWidth: { xs: "100%", sm: 160 },
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <InputLabel>Filter</InputLabel>
              <Select
                value={filter}
                label="Filter"
                onChange={(e) => setFilter(e.target.value)}
              >
                <MenuItem value="All">All Properties</MenuItem>
                <MenuItem value="For Sale">For Sale</MenuItem>
                <MenuItem value="For Rent">For Rent</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Villa">Villa</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="Condo">Condo</MenuItem>
                <MenuItem value="Estate">Estate</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {filtered.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ fontSize: { xs: "18px", md: "24px" }, color: "#5A6473" }}>
                No properties found matching your criteria.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3} justifyContent="center">
              {filtered.map((property) => (
                <Grid item key={property.id} xs={12} sm={6} md={4}>
                  <House
                    img={property.img}
                    price={property.price}
                    address={property.address}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    space={property.space}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};

export default PropertiesPage;
