import React from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import GridContainer from 'gatsby-theme-contentful/src/components/Grid/GridContainer.js';
import GridItem from 'gatsby-theme-contentful/src/components/Grid/GridItem.js';
import Card from 'gatsby-theme-contentful/src/components/Card/Card.js';
import CardBody from 'gatsby-theme-contentful/src/components/Card/CardBody.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import About from 'gatsby-theme-contentful/src/components/About/About';

const HeroLanding = ({ page }) => {
  return (
    <div>
      <div>
        <div>
          {page.section.map((sect, index) => {
            console.log(sect);
            return (
              <div key={index}>
                <Grid container>
                  {sect.image ? (
                    <Grid item xs={12} key={`heroContainer`}>
                      <div style={{ width: '100%' }}>
                        <img
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                          key={`${index}-key`}
                          src={sect.image.fluid.src}
                          srcSet={sect.image.fluid.srcSet}
                          sizes={sect.image.fluid.sizes}
                          alt={sect.image.description}
                        />
                      </div>
                    </Grid>
                  ) : null}
                  <Grid item xs={12} key={`titleContainer`}>
                    <Typography
                      key={`${sect.title}`}
                      variant="h5"
                      align="center"
                      color="inherit"
                      style={{ padding: 20 }}
                    >
                      {sect.title}
                    </Typography>
                  </Grid>
                  {sect.description && (
                    <Grid item xs={12} key={`description`}>
                      <div
                        style={{
                          fontSize: '17px',
                          fontFamily: 'Roboto, Helvetica Arial sans-serif',
                          fontWeight: 400,
                          lineHeight: 1.75,
                          letterSpacing: '0.00938em',
                          paddingLeft: 20,
                          paddingRight: 20,
                        }}
                      >
                        {documentToReactComponents(
                          sect.description.json,
                          // , {
                          // renderNode: {
                          //   [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
                          //     <img
                          //       src={`${node.data.target.fields.file['en-US'].url}?w=300`}
                          //       src={node.data.target.fields.title['en-US']}
                          //     />
                          //   ),
                          // },
                          // }
                        )}
                      </div>
                    </Grid>
                  )}
                  {/*
                    <div style={{ marginTop: '20px' }}>
                    <About />
                  </div>
                      */}
                </Grid>
                {/*sect.item &&
                  sect.item.map(
                    (sec, index) => null,
                    <Button
                      key={`${sec.title}-${index}`}
                      variant="contained"
                      style={{
                        backgroundColor: '#040DAF',
                        marginRight: '5px',
                        marginBottom: '5px',
                      }}
                    >
                      {sec.link ? (
                        <a
                          href={sec.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: '#eee' }}
                        >
                          {sec.title}
                        </a>
                      ) : (
                        <Link
                          to={`/${sec.slug}`}
                          style={{ textDecoration: 'none', color: '#eee' }}
                        >
                          {sec.title}
                        </Link>
                      )}
                    </Button>
                      )*/}
                <Grid container>
                  {sect.product &&
                    sect.product.map((sec, index) => {
                      return (
                        <GridItem xs={12} sm={12} md={4}>
                          <Card profile>
                            <CardBody profile>
                              <h3>{sec.title}</h3>
                              <p>{sec.description}</p>
                              <p>
                                {(sec.price && `$${sec.price}`) ||
                                  'Contact Us For Pricing Details'}
                              </p>
                            </CardBody>
                          </Card>
                        </GridItem>
                      );
                    })}
                </Grid>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
