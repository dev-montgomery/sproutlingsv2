import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {

  const microgreens = {
    radish: {
      name: "radish sprouts",
      description: "Radish microgreens are young seedlings of the radish plant harvested just after the first true leaves have developed. They are small, tender, and vibrant, with a peppery flavor similar to that of mature radishes but often more intense. Radish microgreens are popular for their crisp texture and nutrient density.",
      diet: {
        salads: "Add a handful of radish microgreens to mixed green salads for an extra burst of flavor and a peppery kick.",
        sandwichesAndWraps: "Use radish microgreens as a fresh, crunchy layer in sandwiches, wraps, and burgers.",
        tacosAndBurritos: "Sprinkle radish microgreens on tacos or burritos for added texture and taste.",
        smoothies: "Blend a small amount of radish microgreens into green smoothies for a nutritional boost without overpowering the flavor.",
        soups: "Garnish soups, especially those that are cream-based or vegetable-based, with radish microgreens just before serving.",
        stirFries: "Add radish microgreens at the end of a stir-fry for a fresh, crisp element.",
        omelettesAndScrambledEggs: "Mix radish microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        garnishes: "Use them as a garnish for a variety of dishes, from avocado toast to grilled fish.",
      },
      benefits: {
        nutrientRich: "Radish microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, potassium, and iron.",
        antioxidants: "They are high in antioxidants, which help combat oxidative stress and reduce the risk of chronic diseases.",
        antiInflammatory: "The compounds in radish microgreens have anti-inflammatory properties that can help reduce inflammation in the body.",
        digestiveHealth: "The fiber in radish microgreens aids in digestion and promotes a healthy gut.",
        immuneSupport: "High levels of vitamin C in radish microgreens support immune function and overall health.",
        detoxification: "Radish microgreens can support liver function and aid in the detoxification process due to their high chlorophyll content.",
        heartHealth: "The potassium and magnesium in radish microgreens help regulate blood pressure and support cardiovascular health.",
        boneHealth: "Calcium and vitamin K in radish microgreens are essential for maintaining strong bones and preventing osteoporosis.",
      },
    },
    broccolisprouts: {
      name: "broccoli sprouts",
      description: "Broccoli sprouts microgreens are the young seedlings of the broccoli plant, harvested just after the cotyledon leaves have developed. They are small, delicate, and packed with a slightly milder flavor compared to mature broccoli, with a fresh and crunchy texture.",
      diet: {
        salads: "Add a generous handful of broccoli sprouts microgreens to mixed salads for a fresh and nutritious boost.",
        sandwichesAndWraps: "Use them as a layer in sandwiches, wraps, and burgers for a crunchy texture and mild flavor.",
        smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overpowering the flavor.",
        soups: "Garnish soups, particularly vegetable-based or creamy ones, with broccoli sprouts microgreens for added freshness.",
        stirFries: "Add them to stir-fries at the end of cooking to preserve their crisp texture and nutritional value.",
        omelettesAndScrambledEggs: "Mix broccoli sprouts microgreens into omelettes or scrambled eggs for a healthy and flavorful addition.",
        bowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of broccoli sprouts microgreens.",
        pastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
      },
      benefits: {
        richInSulforaphane: "Broccoli sprouts microgreens are exceptionally high in sulforaphane, a compound known for its powerful antioxidant and anti-inflammatory properties. Sulforaphane may help reduce the risk of cancer and support detoxification processes in the body.",
        nutrientDense: "These microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, potassium, and iron.",
        antioxidantPowerhouse: "High levels of antioxidants help combat oxidative stress and may reduce the risk of chronic diseases.",
        detoxification: "The high sulforaphane content supports liver detoxification and the elimination of toxins from the body.",
        immuneSupport: "The vitamin C and other nutrients in broccoli sprouts microgreens help boost the immune system and overall health.",
        digestiveHealth: "The fiber in these microgreens aids in digestion and promotes a healthy gut microbiome.",
        heartHealth: "The potassium and antioxidants support cardiovascular health by helping to regulate blood pressure and reduce inflammation.",
        boneHealth: "Rich in vitamin K and calcium, broccoli sprouts microgreens contribute to maintaining strong bones and preventing osteoporosis.",
      },
    },
    sunflowershoots: {
      name: "sunflower shoots",
      description: "Black oil sunflower microgreens are the young shoots of sunflower plants, harvested when they are about 1-3 inches tall. They are known for their crunchy texture and nutty flavor, making them a versatile addition to various dishes.",
      diet: {
        salads: "Add a handful of sunflower microgreens to salads for a crunchy texture and a nutty taste.",
        sandwichesAndWraps: "Use them as a layer in sandwiches, wraps, and burgers for added flavor and crunch.",
        smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overpowering the flavor.",
        soups: "Garnish soups with sunflower microgreens just before serving to add freshness and a slight nutty flavor.",
        stirFries: "Toss them into stir-fries at the end of cooking to maintain their texture and nutritional value.",
        omelettesAndScrambledEggs: "Mix sunflower microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        bowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of sunflower microgreens.",
        pastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
        snacks: "Eat them on their own as a healthy snack or add them to homemade energy bars.",
      },
      benefits: {
        richInNutrients: "Sunflower microgreens are packed with vitamins A, B, C, D, and E, as well as essential minerals like calcium, iron, magnesium, potassium, and zinc.",
        highInAntioxidants: "These microgreens contain antioxidants that help protect cells from damage and reduce the risk of chronic diseases.",
        goodSourceOfProtein: "Sunflower microgreens are a good plant-based source of protein, which is essential for muscle repair and growth.",
        digestiveHealth: "The fiber content in sunflower microgreens aids in digestion and promotes a healthy gut.",
        immuneSupport: "The vitamins and minerals in sunflower microgreens support a healthy immune system and overall health.",
        boneHealth: "The calcium and magnesium in sunflower microgreens contribute to strong bones and teeth.",
        heartHealth: "The potassium content helps regulate blood pressure, while the antioxidants support cardiovascular health.",
        skinHealth: "The vitamin E in sunflower microgreens is beneficial for skin health, helping to protect and repair skin cells.",
        energyBoost: "The B vitamins in sunflower microgreens play a key role in energy metabolism, helping to convert food into energy efficiently.",
      },
    },
    peashoots: {
      name: "pea shoots",
      description: "Peashoot microgreens are young, tender shoots of pea plants harvested when they are about 1-3 inches tall. They have a sweet, slightly pea-like flavor with a crisp texture, making them a delightful addition to various dishes.",
      diet: {
        salads: "Peashoot microgreens can be used as a base or garnish for salads, adding a fresh, crunchy element. They pair well with other vegetables, fruits, nuts, and a light vinaigrette.",
        sandwichesAndWraps: "Add peashoot microgreens to sandwiches, wraps, or burgers for an extra layer of flavor and crunch. They complement both vegetarian and meat-based fillings.",
        smoothiesAndJuices: "Blend peashoot microgreens into smoothies or juices for a nutrient boost without significantly altering the flavor.",
        stirFries: "Toss peashoot microgreens into stir-fries at the end of cooking to maintain their crisp texture while adding a fresh taste.",
        soups: "Use peashoot microgreens as a garnish for soups, particularly those with an Asian influence, such as miso or wonton soup.",
        omelettesAndScrambles: "Incorporate peashoot microgreens into omelettes or scrambled eggs for a nutritious breakfast option."
      },
      benefits: {
        richInNutrients: "Peashoot microgreens are packed with vitamins and minerals, including vitamins A, C, E, and K, as well as folate and beta-carotene. They are also a good source of protein and fiber.",
        antioxidantProperties: "They contain antioxidants that help combat oxidative stress and reduce inflammation in the body.",
        supportsEyeHealth: "The high levels of beta-carotene and vitamin A support eye health and may reduce the risk of age-related macular degeneration.",
        boostsImmunity: "The vitamin C content in peashoot microgreens can help strengthen the immune system and fight off infections.",
        aidsDigestion: "The fiber in peashoot microgreens aids in digestion and helps maintain a healthy gut.",
        heartHealth: "They contain nutrients that support cardiovascular health, such as folate and antioxidants, which can help reduce the risk of heart disease.",
        lowInCalories: "Peashoot microgreens are low in calories, making them an excellent addition to a weight management diet."
      },
    },
    wheatgrass: {
      name: "wheat grass",
      description: "Wheatgrass microgreens are young shoots of the wheat plant (Triticum aestivum), typically harvested when they are about 7-10 days old. Known for their vibrant green color and mild, sweet taste, wheatgrass microgreens are often juiced or added to smoothies but can also be incorporated into various other dishes.",
      diet: {
        juicesAndSmoothies: "Blend wheatgrass microgreens into green juices or smoothies for a nutritional boost. Their mild flavor pairs well with fruits and other greens.",
        salads: "Mix wheatgrass microgreens with other leafy greens in salads for added nutrition and a fresh taste.",
        soups: "Add chopped wheatgrass microgreens to soups just before serving to retain their nutrients and add a mild, grassy flavor.",
        sandwichesAndWraps: "Use wheatgrass microgreens as a fresh, crunchy layer in sandwiches, wraps, and burgers.",
        pesto: "Blend wheatgrass microgreens with basil, nuts, garlic, and olive oil to make a nutrient-dense pesto.",
        ripsAndSpreads: "Mix wheatgrass microgreens into hummus, guacamole, or other dips for a nutritional upgrade.",
        grainBowls: "Top grain bowls, such as quinoa or rice dishes, with a handful of wheatgrass microgreens.",
        garnishes: "Use wheatgrass microgreens as a garnish for a variety of dishes, from roasted vegetables to grilled meats.",
      },
      benefits: {
        richInNutrients: "Wheatgrass microgreens are loaded with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, iron, and potassium.",
        antioxidantProperties: "High in antioxidants, wheatgrass microgreens help combat oxidative stress and may reduce the risk of chronic diseases.",
        detoxification: "Wheatgrass is known for its detoxifying properties, particularly in supporting liver function and helping to cleanse the blood.",
        boostsImmunity: "The vitamins and antioxidants in wheatgrass microgreens support a healthy immune system.",
        digestiveHealth: "Wheatgrass contains enzymes that aid in digestion and promote a healthy gut microbiome.",
        energyLevels: "The nutrients in wheatgrass microgreens can help boost energy levels and improve overall vitality.",
        alkalizingEffect: "Wheatgrass has an alkalizing effect on the body, which can help balance pH levels and reduce acidity.",
        antiInflammatory: "The compounds in wheatgrass have anti-inflammatory properties, which can help reduce inflammation in the body.",
        skinHealth: "The high levels of vitamins and antioxidants in wheatgrass microgreens are beneficial for skin health, helping to protect and repair skin cells.",
        cholesterolAndBloodPressure: "Some studies suggest that wheatgrass can help lower cholesterol levels and regulate blood pressure, promoting heart health.",
      },
    },
    saladmix: {
      name: "salad mix variety",
      description: "Salad mix variety microgreens are a blend of different young seedlings typically harvested when they are about 1-3 inches tall. This mix can include microgreens such as arugula, radish, mustard, kale, and mizuna. Each type of microgreen in the mix adds unique flavors, textures, and nutritional benefits, making salad mix variety microgreens a versatile and nutrient-dense option.",
      diet: {
        salads: "Use salad mix variety microgreens as the base or a component of mixed salads for diverse flavors and textures.",
        sandwichesAndWraps: "Add them to sandwiches, wraps, and burgers for a fresh, crunchy layer.",
        smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overwhelming the flavor.",
        soups: "Garnish soups with salad mix microgreens just before serving to add freshness and a mix of flavors.",
        stirFries: "Toss them into stir-fries at the end of cooking to maintain their crisp texture and nutritional value.",
        omelettesAndScrambledEggs: "Mix salad mix microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        bowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of salad mix microgreens.",
        pastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
        tacosAndBurritos: "Sprinkle them on tacos or burritos for added texture and taste.",
        pizzas: "Add a handful of salad mix microgreens to pizzas just before serving for a fresh, peppery kick.",
      },
      benefits: {
        nutrientRich: "Salad mix microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, potassium, and iron.",
        antioxidants: "These microgreens are high in antioxidants, which help combat oxidative stress and reduce the risk of chronic diseases.",
        antiInflammatory: "The compounds in microgreens have anti-inflammatory properties that can help reduce inflammation in the body.",
        digestiveHealth: "The fiber in salad mix microgreens aids in digestion and promotes a healthy gut.",
        immuneSupport: "High levels of vitamins and minerals support immune function and overall health.",
        detoxification: "Certain microgreens, like radish and arugula, support liver function and aid in the detoxification process.",
        heartHealth: "The potassium and magnesium in salad mix microgreens help regulate blood pressure and support cardiovascular health.",
        boneHealth: "Calcium and vitamin K in salad mix microgreens are essential for maintaining strong bones and preventing osteoporosis.",
        eyeHealth: "Microgreens like kale are rich in lutein and zeaxanthin, which are beneficial for eye health.",
        skinHealth: "The vitamins and antioxidants in salad mix microgreens help protect and repair skin cells, promoting healthy skin.",
      },
    },
  };

  // update availability ----------------------------------------
  microgreens.radish.availability = true;
  microgreens.broccolisprouts.availability = false;
  microgreens.sunflowershoots.availability = true;
  microgreens.peashoots.availability = true;
  microgreens.wheatgrass.availability = true;
  microgreens.saladmix.availability = false;
  // ------------------------------------------------------------

  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <header>
            <nav>
              <ul className="nav-icons">
                <li className="tooltip">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-brands fa-instagram"></i>
                  </a>
                  <span className="tooltiptext">Instagram</span>
                </li>
                <li className="tooltip">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-brands fa-facebook"></i>
                  </a>
                  <span className="tooltiptext">Facebook</span>
                </li>
                <li className="tooltip">
                  <Link to="/">
                    <i className="fa fas fa-seedling"></i>
                  </Link>
                  <span className="tooltiptext">Home</span>
                </li>
                <li className="tooltip">
                  <Link to="/about">
                    <i className="fa fa-solid fa-book-open"></i>
                  </Link>
                  <span className="tooltiptext">About Us</span>  
                </li>
                <li className="tooltip">
                  <Link to="/cart">
                    <i className="fa fa-solid fa-cart-shopping"></i>
                  </Link>
                  <span className="tooltiptext">Place Order</span>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home microgreens={microgreens} />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <footer>
            <p>&copy; 2024 Sproutlings Microgreens LLC</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;