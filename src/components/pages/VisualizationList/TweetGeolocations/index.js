import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { COLORS } from "~/constants/colors";

import VisualizationTemplate from "../VisualizationTemplate";

import { DUMMY_TWEET_GEOLOCATIONS, GEO_URL } from "./constants";
import { StyledTweetGeolocations } from "./styles";

const TweetGeolocations = () => {
  return (
    <StyledTweetGeolocations>
      <VisualizationTemplate title="Tweet Geolocations">
        <ComposableMap projectionConfig={{ scale: 350 }}>
          <ZoomableGroup zoom={1} center={[0, 0]}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={COLORS.GREY_2}
                    stroke={COLORS.GREY_1}
                  />
                ))
              }
            </Geographies>
            {DUMMY_TWEET_GEOLOCATIONS.map((coordinates, index) => (
              <Marker
                key={`tweet-geolocation-${index}`}
                coordinates={coordinates}
              >
                <circle
                  r={10}
                  fill={COLORS.PRIMARY_1}
                  stroke={COLORS.WHITE}
                  strokeWidth={2}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </VisualizationTemplate>
    </StyledTweetGeolocations>
  );
};

export default TweetGeolocations;
