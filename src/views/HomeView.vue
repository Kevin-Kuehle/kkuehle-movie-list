<template>
  <section class="section section__home__description">
    <div class="section__title"><h2>Willkommen in meiner Film-App!</h2></div>
    <div class="section__home__description__content">
      <p>
        Suche nach Filmen und entdecke deine Lieblingstitel. Die Liste präsentiert dir die
        Ergebnisse auf einen Blick. Und wenn du mehr wissen möchtest, öffne die Detailansicht für
        umfangreichere Informationen. Tauche ein in die faszinierende Welt des Films und genieße das
        Erlebnis! Viel Spaß beim Entdecken und Genießen deiner Filme!
      </p>
    </div>
  </section>

  <section class="section section--full-width section__home_movies">
    <div class="section__home__movies__teaser">
      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-1"
        src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        alt="Harry Potter"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-2"
        src="https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        alt="Star Wars"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-3"
        src="https://m.media-amazon.com/images/M/MV5BMTk0NjAzNjg4NF5BMl5BanBnXkFtZTgwNDQ3NjIwMzE@._V1_SX300.jpg"
        alt="The Story of Frozen"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-4"
        src="https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_SX300.jpg"
        alt="The Equalizer"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-5"
        src="https://m.media-amazon.com/images/M/MV5BMTU0NzY0MTY5OF5BMl5BanBnXkFtZTcwODY3MDEwMg@@._V1_SX300.jpg"
        alt="Sieben Leben"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-6"
        src="https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        alt="Bad Boys"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-7"
        src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
        alt="Top Gun"
      />

      <img
        class="section__home__movies__teaser__image section__home__movies__teaser__image-8"
        src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        alt="Herr der Ringe"
      />
    </div>
  </section>

  <section class="section section--full-width section__home__action">
    <div class="section__title"><h2>Hier gehts zur Suche</h2></div>
    <router-link class="section__home__action__button button" to="/list"> Zur Liste </router-link>
  </section>

  <section class="section section__home__socials">
    <div class="section__title"><h2>Code auf GitHub</h2></div>
    <div class="section__home__socials__links">
      <a title="GitHub" href="https://github.com/Kevin-Kuehle/kkuehle-movie-list" target="blank"
        ><IconGithub class="icon"></IconGithub>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconGithub } from '@icons'
</script>

<style lang="scss" scoped>
.section {
  &__home {
    &__description {
      padding: 4rem;

      &__content {
        text-align: center;
      }
    }

    &__movies {
      overflow: hidden;

      &__teaser {
        flex: 1;
        display: grid;
        justify-items: center;
        grid-template: 100% / repeat(8, 1fr);
        gap: 25px 15px;

        @media screen and (max-width: 1750px) {
          grid-template: auto / repeat(4, 1fr);
        }

        @media screen and (max-width: 850px) {
          grid-template: auto / repeat(2, 1fr);
        }

        &__image {
          height: 100%;
          max-height: 280px;

          @media screen and (max-width: 440px) {
            // 40px padding left and right
            width: calc(50vw - 40px);
            height: auto;
          }
        }
      }
    }

    &__action {
      padding: 4rem;
      color: white;
      background-color: var(--color-primary-dark);

      &__button {
        margin: 0 auto;
        color: wheat;
      }

      .section__title {
        color: white;
      }
    }

    &__socials {
      &__links {
        text-align: center;
        flex: 1 0 32px;
      }
    }
  }
}
</style>
