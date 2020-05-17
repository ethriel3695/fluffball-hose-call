import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import TextOnlyCard from 'gatsby-theme-contentful/src/components/Card/TextOnlyCard';
import Button from '../Button/Button';

const HeroLanding = ({ page }) => {
  return (
    <div className="bg-gray-0">
      <div>
        <div>
          {page.section.map((sect, index) => {
            return (
              <div className="container" key={index}>
                <div>
                  {sect.image ? (
                    <div className="max-w-full">
                      <img
                        className="max-w-full max-h-full"
                        key={`${index}-key`}
                        src={sect.image.fluid.src}
                        srcSet={sect.image.fluid.srcSet}
                        sizes={sect.image.fluid.sizes}
                        alt={sect.image.description}
                      />
                    </div>
                  ) : null}
                  <div
                    className="text-center text-4xl p-12"
                    key={`${sect.title}`}
                  >
                    {sect.title}
                  </div>
                  {sect.description && (
                    <div className="text-lg text-gray-800 text-center">
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
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap lg:flex-row flex-col">
                    {sect.product &&
                      sect.product.map((sec, index) => {
                        return (
                          <TextOnlyCard key={`card-${index}`}>
                            <div
                              className="font-bold text-xl mb-5"
                              key={`${sec.title}`}
                            >
                              {sec.title}
                            </div>
                            <p
                              className="my-4 text-base text-gray-700 whitespace-pre-line"
                              key={`${sec.description}`}
                            >
                              {sec.description.description}
                            </p>
                            <p
                              className="text-gray-700 text-base"
                              key={`${sec.price}`}
                            >
                              {' '}
                              {(sec.price && `$${sec.price}`) ||
                                'Contact Us For Pricing Details'}
                            </p>
                          </TextOnlyCard>
                        );
                      })}
                  </div>
                </div>
                <div className="text-center text-xl">
                  {sect.item &&
                    sect.item.map((sec, index) => {
                      return (
                        <Button key={`${sec.title}-${index}`}>
                          {sec.link ? (
                            <a
                              className={' no-underline'}
                              href={sec.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sec.title}
                            </a>
                          ) : (
                            <Link
                              className={' no-underline'}
                              to={`/${sec.slug}`}
                            >
                              {sec.title}
                            </Link>
                          )}
                        </Button>
                      );
                    })}
                </div>
                <div className="flex flex-wrap -mx-3 lg:-mx-6">
                  {sect.gallery &&
                    sect.gallery.map((gal, index) => {
                      return (
                        <div
                          key={`gallery-${index}`}
                          className="w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6 shadow-lg rounded-md overflow-hidden"
                        >
                          <img
                            key={`${index}-key`}
                            src={gal.fluid.src}
                            srcSet={gal.fluid.srcSetWebp}
                            sizes={gal.fluid.sizes}
                            alt={gal.description}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
