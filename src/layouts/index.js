import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from 'react-google-maps';
import logo from './logo.png'
import './index.css'
import mapStyles from './mapStyles'

const Header = () => (
  <div
    style={{
      background: '#2c3242',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Syncromatics.engineering
        </Link>
      </h1>
    </div>
  </div>
)

const WrappedGoogleMap = withScriptjs(withGoogleMap(GoogleMap));

const Footer = () => (
  <div style={{
    position: 'relative',
  }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '5rem',
        zIndex: 1,
        background: 'linear-gradient(to bottom, white, transparent)',
      }}
    />
    <WrappedGoogleMap
      googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyANSTi_sL4QAzGe1PRu__yx7hQDQMFtmAE&v=3.exp&libraries=geometry,drawing,places'}
      loadingElement={
        <div style={{ height: '20rem' }}>
          loading...
        </div>
      }
      containerElement={
        <div style={{ height: '20rem' }} />
      }
      mapElement={
        <div style={{ height: '20rem' }} />
      }
      defaultZoom={16}
      defaultCenter={{ lat: 34.0510, lng: -118.2546 }}
      options={{
        draggable: false,
        clickableIcons: false,
        disableDefaultUI: true,
        styles: mapStyles,
      }}
    >
      <Marker
        position={{ lat: 34.0487, lng: -118.2546 }}
      />
      <Marker
        position={{ lat: 34.0487, lng: -118.2546 }}
        icon={{
          url: logo,
          anchor: {
            x: 50,
            y: 110,
          }
        }}
      />
    </WrappedGoogleMap>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Syncromatics.engineering"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
