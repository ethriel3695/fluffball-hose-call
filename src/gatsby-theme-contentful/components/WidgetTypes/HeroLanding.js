import React from 'react';
import loadable from '@loadable/component';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const HeroComponent = loadable(() => import('../UI/HeroComponent'));
const SectionWidget = loadable(() => import('./SectionWidget'));

const HeroLanding = ({ page }) => {
  return (
    <div className="bg-gray-0">
      <div>
        <div>
          {page.section.map((sect, index) => {
            return (
              <div key={index}>
                {sect.image ? <HeroComponent sect={sect} /> : null}
                <div className="container">
                  <h2 className="text-left py-8" key={`${sect.title}`}>
                    {sect.title}
                  </h2>
                  {sect.description && (
                    <div className="text-lg text-gray-800 text-left mb-2">
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
                  <SectionWidget sect={sect} />
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
