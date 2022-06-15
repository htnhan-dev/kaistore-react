import React from "react";
import Helmet from "../components/Helmet";
import heroSliderData from "../assets/fake-data/hero-slider";
import HeroSlider from "../components/HeroSlider";
import Wrapper from "../components/Wrapper";
import { Link } from 'react-router-dom'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <Wrapper
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
