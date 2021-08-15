import React from "react";
import { useSelector } from "react-redux";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { COLORS } from "~/constants/colors";
import { streamingSelector } from "~/slices/streaming";

import VisualizationTemplate from "../VisualizationTemplate";

import { GEO_URL } from "./constants";
import { StyledTweetGeolocations } from "./styles";

const TweetGeolocations = () => {
  const { tweetGeolocations } = useSelector(streamingSelector);

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
            {tweetGeolocations.map((coordinates, index) => (
              <Marker
                key={`tweet-geolocation-${index}`}
                coordinates={[coordinates.lat, coordinates.long]}
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
