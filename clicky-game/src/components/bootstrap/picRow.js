import React from 'react';

const PicRow = ({links, randomize}) => links.map(currentItem=>
		<div className="col-3" onClick={()=>{randomize(currentItem)}}>
			<img src={currentItem} className="img-fluid" alt="scenery"></img>
		</div>
	);

			/*<div>
				<div className="row">
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[0]])}}>
				    <img src={links[arrPos[0]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[1]])}}>
				    <img src={links[arrPos[1]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[2]])}}>
				    <img src={links[arrPos[2]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[3]])}}>
				    <img src={links[arrPos[3]]} className="img-fluid" alt="scenery"></img>
				  </div>
				</div>
				<hr></hr>
				<div className="row">
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[4]])}}>
				    <img src={links[arrPos[4]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[5]])}}>
				    <img src={links[arrPos[5]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[6]])}}>
				    <img src={links[arrPos[6]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[7]])}}>
				    <img src={links[arrPos[7]]} className="img-fluid" alt="scenery"></img>
				  </div>
				</div>
				<hr></hr>
				<div className="row">
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[8]])}}>
				    <img src={links[arrPos[8]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[9]])}}>
				    <img src={links[arrPos[9]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[10]])}}>
				    <img src={links[arrPos[10]]} className="img-fluid" alt="scenery"></img>
				  </div>
				  <div className="col-3" onClick={()=>{randomize(links[arrPos[11]])}}>
				    <img src={links[arrPos[11]]} className="img-fluid" alt="scenery"></img>
				  </div>
				</div>
			</div>*/

export default PicRow;