import React from 'react'
import './Publication.css'

const Publication = () => {
  return (
    <div className='publication_area'>
      <h2>Publicaciones</h2>
      <br />
      <div className='publication'>
        <div className='pubTitle'>
          <h3>Detection of Deforested Areas in the Peruvian Amazon Using Satellite Images</h3>
          <p><b>Conference: </b> Proceedings of the 7th Brazilian Technology Symposium (BTSym’21)</p>
          <p><b>Authors: </b> Ricardo Carbajal, Alejandro Alvarez, Joshi Lopez, Miguel Saturno, Víctor Murray</p>
          <p><b>DOI:</b> <a target='blank' href="https://link.springer.com/chapter/10.1007/978-3-031-04435-9_49">10.1007/978-3-031-04435-9_49</a> </p>
          <img src="Output.png" alt="" />
        </div>
        <div className='description'>
          <p><b>Abstract: </b> Deforestation brings many problems 
          to humanity, so studies started to appear to help reduce 
          the damages done by the root of the problem and restore 
          the health of our forests. In this paper, we present a method 
          that can help identify deforested areas with the intention 
          that deforestation may be monitored automatically using satellite 
          imagery in the future. We analyze satellite images from the 
          Peruvian Amazon in three separate timelines to view change over time. 
          First, we preprocessed the images to remove haze and cloud 
          using the dark channel prior method. Then, we segment the 
          deforested area in the clean images by converting the RGB images 
          to HSV format and later filtering the color corresponding to forested 
          areas. Then we produce three binary images from the HSV conversion. 
          Finally, these images are merged to obtain a single image that shows 
          the change of deforestation over time. The method is compared with methods 
          based on NDVI and NDTS detecting more deforested regions.</p>
        </div>
      </div>

      <div className='publication'>
        <div className='pubTitle'>
          <h3>Air Quality Analysis in Lima, Peru Using the NO2 Levels during the COVID-19 Pandemic Lockdown</h3>
          <p><b>Journal: </b> Atmosphere </p>
          <p><b>Authors: </b> Diego Velayarce, Qespisisa Bustos, Maria Paz García, Camila Timaná, Ricardo Carbajal, Noe Salvatierra, Daniel Horna, and Victor Murray </p>
          <p><b>DOI:</b> <a target='blank' href="https://www.mdpi.com/2073-4433/13/3/373#">10.3390/atmos13030373</a> </p>
          <img src="NO2.png" alt="" />
        </div>
        <div className='description'>
          <p><b>Abstract: </b> The emergence of the new COVID-19 virus in Peru forced the Peruvian government to take swift measures to stop its proliferation. Consequently, a state of emergency was declared, which included mandatory social isolation and quarantine. This action meant that people would transit only in emergency cases. In this context, this study’s objective is to analyze the air quality changes in terms of the capital city’s NO2
 levels due to these government decisions using satellite imagery data obtained from the Sentinel-5P satellite. One critical problem is the lack of spatially distributed air quality data. The Peruvian Meteorological Service only monitors air quality in Lima, the capital city. In addition, the air quality ground stations are not always functioning. Thus, there is a need to find new reliable methods to complement the official data obtained. One method of doing so is the use of remote sensing products, although the accuracy and applicability are yet to be determined; therefore, this is the article’s focus. A temporal and spatial analysis was developed quantitatively and qualitatively to measure the levels of NO2
 in eighteen regions of Lima to contrast the quarantine’s effect on polluting gas emission levels. The measurements are also compared with the official Peruvian data from ground sensors using Pearson correlation coefficients, thus, showing that Sentinel-5P data can be used for changes in the mean daily concentration of NO2
. We also developed the first version of an open platform that converts the satellite data into a friendly format for visualization. The results show NO2
 ambient concentration reductions compared to 2019 of between 60% and 40% in the first two weeks and between 50% and 25% in the following two weeks of the COVID-19 lockdown. However, this effect could not be observed two months after the start of the lockdown. </p>
        </div>
      </div>

    </div>
  )
}

export default Publication
