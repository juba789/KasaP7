import React from "react";
import './DescriptionPanel.scss';

export function DescriptionPanel(){
    return (<div className='description__panel' >
            <p className='description__header'>
              <span>description</span>
              <i className="fas fa-chevron-up"></i>
            </p>
            <p className='description__content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestias, illo, consequatur incidunt harum atque maxime, delectus dolorum blanditiis sequi saepe. Doloremque laboriosam omnis nam quia dicta officia, commodi quidem aliquam nobis delectus error, iure fugit. Optio vero asperiores est quo dicta, fuga eaque quaerat doloremque nobis sapiente enim aut.</p>
        </div>  );
    
    }