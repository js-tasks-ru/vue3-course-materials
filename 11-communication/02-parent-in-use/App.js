import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAccordion from './UiAccordion.js';
import UiAccordionItem from './UiAccordionItem.js';

export default defineComponent({
  name: 'App',

  components: {
    UiAccordion,
    UiAccordionItem,
  },

  data() {
    return {
      selected: 'cat',
    };
  },

  template: `
    <div class="container" style="margin-top: 1rem">
      <p>Selected = {{ selected }}</p>
      <UiAccordion v-model:selected="selected">
        <UiAccordionItem name="cat" title="Cat">
          The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries.
        </UiAccordionItem>
        <UiAccordionItem name="dog" title="Dog">
          The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf, characterized by an upturning tail. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers over 15,000 years ago, before the development of agriculture. Due to their long association with humans, dogs have expanded to a large number of domestic individuals] and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.]
        </UiAccordionItem>
        <UiAccordionItem name="ferret" title="Ferret">
          The ferret (Mustela furo) is a small, domesticated species belonging to the family Mustelidae. The ferret is most likely a domesticated form of the wild European polecat (Mustela putorius), evidenced by their interfertility. Other mustelids include the stoat, badger and mink.
        </UiAccordionItem>
      </UiAccordion>
    </div>
  `,
});
