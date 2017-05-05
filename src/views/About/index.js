// @flow

import React from 'react'

import './About.sass'

// COMPONENTS _________________________________________________________________
import Section from '../../components/Section'

function About() {
  return (
    <Section name="¿Qué es el Simposio?" className="background_white about-container">
      <div className="about__portrait">
        <div className="about__pic-container">
          <div className="about__pic">
          </div>
        </div>
      </div>
      <div className="about__content">
        <div className="introduction">
          <h2>Introducción</h2>
          <p>
            El Simposio de Contabilidad y Auditoría del Extremos Sur, desde sus inicios en 2007, se propuso aprovechar el inspirador contexto que propone la ciudad de Ushuaia, con sus grandes atractivos naturales, para generar un espacio de debate y reflexión sobre temas de actualidad en las disciplinas que conforman el eje central del evento. De esta manera, los Profesores de la UBA, Ricardo Pahlen Acuña y Héctor Chyrikins, propusieron su creación a un grupo de docentes locales, los que decidieron otorgar todo su apoyo y brindar el máximo esfuerzo para la concreción de aquella primera edición y posterior consolidación a lo largo de los 10 años posteriores, con una frecuencia anual de encuentros durante la segunda quincena del mes de mayo.
          </p>
          <p>
            Desde aquel momento y hasta la presente edición, se han compartido brillantes conferencias, a cargo de prestigiosos profesionales y docentes del ámbito nacional e internacional, y se han presentado y expuesto un importante número de trabajos fruto de las investigaciones e indagaciones de los autores.
          </p>
          <p>
            El Simposio que se origina en la Facultad de Ciencias Económicas de la Universidad Nacional de la Patagonia San Juan Bosco, y que adoptara a partir de 2013 el Instituto de Desarrollo Económico e Innovación de la Universidad Nacional de Tierra del Fuego, Antártida e Islas del Atlántico Sur, se encuentra en el cronograma de eventos académicos de la Contabilidad y Auditoría a nivel nacional.
          </p>
          <p>
            Incrementar el alcance de los trabajos presentados en el Simposio, a través de la publicación de los mismos en formato digital, es uno de los objetivos estratégicos que se esperan concretar, junto con el incremento de la participación de estudiantes y docentes locales.
          </p>
          <p>
            Los premios que se otorgan a los mejores trabajos, constituyen un importante incentivo para generar una creciente calidad en la producción académico científica de los participantes.
          </p>
          <p>
            Es por todo esto que se invita a estudiantes, docentes e investigadores vinculados a la Contabilidad y la Auditoría y al público en general, a participar de este importante evento.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
