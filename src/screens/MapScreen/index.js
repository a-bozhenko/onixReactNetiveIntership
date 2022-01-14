import React from 'react';
import {
  View, Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {
  ContainerWrapper, Footer,
} from '../../components';
import { ColorSchemeClass } from '../../entities';

const MapScreen = function () {
  const { colors } = new ColorSchemeClass().getTheme();

  return (
    <SafeAreaView
      style={styles.root}
    >
      <ContainerWrapper noScroll>
        <View style={styles.container}>
          <View style={styles.infoWrapper}>
            <Text style={[styles.textTitle, { color: colors.text, backgroundColor: colors.background }]}>
              Map:
            </Text>
          </View>

          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            showsMyLocationButton
            showsPointsOfInterest
            showsScale
            zoomControlEnabled

            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={{
              latitude: 37.78925,
              longitude: -122.4324,
            }}
            >
              <MaterialCommunityIcons name="pin" color={colors.primary} size={33} />
            </Marker>

            <Polygon
              strokeWidth={2}
              strokeColor={colors.border}
              fillColor={colors.primary}
              coordinates={[
                {
                  latitude: 37.78825,
                  longitude: -122.4324,
                },
                {
                  latitude: 37.78555,
                  longitude: -122.4524,
                },
                {
                  latitude: 37.78425,
                  longitude: -122.4444,
                },
                {
                  latitude: 37.78335,
                  longitude: -122.4224,
                },
                {
                  latitude: 37.78825,
                  longitude: -122.4324,
                }
              ]}
            />

          </MapView>
        </View>
      </ContainerWrapper>
      <Footer />
    </SafeAreaView>
  );
};

export default MapScreen;
