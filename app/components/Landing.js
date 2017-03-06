import React from 'react';
import content from '../content';
import Image from './Image';

export const Landing = React.createClass({
	
	render() {
		const items = content || [];
		return (
			<div>
				<div className={'landing-statement'}>
					<div className={'landing-statement-content'}>
						<b>Sea Change: Time, Tides, and Transformation</b>
						<div className={'landing-statement-poem'}>{`Full fathom five thy father lies;
	Of his bones are coral made;	
Those are pearls that were his eyes:
	Nothing of him that doth fade
But doth suffer a sea change
Into something rich and strange`}
						</div>
						 William Shakespeare, The Tempest, Act I, Scene II
					</div>
				</div>
				
				{items.map((item, index)=> {
					return (
						<div key={`item-${index}`} className={'landing-image-container'}>
							<Image key={'item-' + item.filename} image={item} hasLink={true} />
						</div>
					);

				})}
			</div>
		);
	}
});


export default Landing;
