"use client";

import Faq from "@/components/Faq";
import SliderApplication from "@/components/SliderApplication";
import SliderAtulye from "@/components/SliderAtulye";
import SliderEnvirement from "@/components/SliderEnvirement";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="banner">
        <Image
          src="/images/shrubs.jpg" // Replace with your image path
          alt="Background logs"
          width={0}
          height={0}
          sizes="100vw"
          priority
          quality={90}
          className=""
        />
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1>Medicinal & Ecological Shrubs</h1>
              <h2>
                Low-Maintenance Green Assets for Health,
                <br />
                Heritage, and Habitat
              </h2>
              <p>
                Shrubs are compact, woody or semi-woody plants that serve
                multiple functions in natural and cultivated ecosystems. Unlike
                trees, they remain shorter but grow densely, offering excellent
                coverage, resilience, and versatility. Whether used in
                hedgerows, herbal gardens, soil conservation zones, or
                biodiversity parks, shrubs are crucial in building
                climate-resilient landscapes.
              </p>

              <p>
                Under the Athulye Krishi Vana initiative, we promote the
                cultivation of native and adaptive shrubs that serve medicinal,
                ornamental, and ecological purposes. Among these, Adusa / Vasaka
                (Justicia adhatoda), Chirchita (Achyranthes aspera), Yavasa
                (Alhagi maurorum), and Kanghi (Abutilon indicum) stand out for
                their resilience, heritage value, and practical applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="hero_wave">
        <Image
          src="/images/wave.png" // Replace with your image path
          alt="Background logs"
          width={0}
          height={0}
          sizes="100vw"
          priority
          quality={90}
          className="h-auto w-100"
        />
      </div>
      <section className="adusa adusa_up">
        <div className="content">
          <div className="container">
            <div className="heading">
              <h2>Adusa / Vasaka (Justicia adhatoda)</h2>
              <p>
                <strong>The Respiratory Remedy in Your Garden</strong>
              </p>
              <p>
                Vasaka, also known as Adhatoda or Malabar Nut, is a well-known
                medicinal shrub in Ayurveda. With dense green foliage and long
                spikes of white or purple flowers, it is valued for its
                respiratory benefits.
              </p>
            </div>

            <div className="benefits">
              <h3 className="key_heading">Key Benefits</h3>

              <div className="row g-5">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Medicinal Uses: Leaves are used in treating cough,
                      bronchitis, asthma, and other respiratory ailments.
                    </p>
                  </div>
                  <Image
                    src="/images/bene1.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/bene2.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Medicinal Uses: Leaves are used in treating cough,
                      bronchitis, asthma, and other respiratory ailments.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Medicinal Uses: Leaves are used in treating cough,
                      bronchitis, asthma, and other respiratory ailments.
                    </p>
                  </div>
                  <Image
                    src="/images/bene3.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/bene4.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Medicinal Uses: Leaves are used in treating cough,
                      bronchitis, asthma, and other respiratory ailments.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="key_heading pb-3">
                Agro-climatic Suitability &<br />
                Economic Potential
              </h3>
              <div className="text-center">
                <Image
                  src="/images/agro-hand.png" // Replace with your image path
                  alt="Background logs"
                  width={330}
                  height={316}
                  quality={90}
                  className="mb-5"
                />
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <p>
                      Adusa is highly adaptable to Indian tropical and
                      subtropical climates. It grows in loamy to slightly saline
                      soils and tolerates drought conditions. It thrives best in
                      full to partial sunlight.
                    </p>

                    <p>
                      Vasaka is widely used in herbal medicine and respiratory
                      syrups, creating consistent demand in Ayurvedic product
                      industries. Farmers can sell dried leaves, extracts, or
                      grow saplings for sale to herbal nurseries and medicinal
                      plantations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adusa adusa_white">
        <div className="content">
          <div className="container">
            <div className="heading">
              <h2>Chirchita (Achyranthes aspera)</h2>
              <p>
                <strong>The Herbal Sentinel of Wastelands</strong>
              </p>
              <p>
                Chirchita, or Prickly Chaff Flower, is a native shrub that grows
                well in uncultivated fields, open grasslands, and rocky terrain.
                Though often overlooked, it holds high herbal significance in
                traditional medicine.
              </p>
            </div>

            <div className="benefits">
              <h3 className="key_heading">Key Benefits</h3>

              <div className="row g-5">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Traditional Remedy: Used in managing kidney stones, joint
                      pain, wounds, and digestive issues.
                    </p>
                  </div>
                  <Image
                    src="/images/chirchita-bene-1.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/chirchita-bene-2.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>Hardy Nature: Grows in poor soils with minimal water.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Ecological Value: Serves as ground cover and prevents
                      erosion.
                    </p>
                  </div>
                  <Image
                    src="/images/chirchita-bene-3.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/chirchita-bene-4.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Livestock Friendly: Tender shoots are browsed by goats and
                      sheep.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="key_heading pb-3">
                Agro-climatic Suitability &<br />
                Economic Potential
              </h3>
              <div className="text-center">
                <Image
                  src="/images/agro-hand-round.png" // Replace with your image path
                  alt="Background logs"
                  width={330}
                  height={316}
                  quality={90}
                  className="mb-5"
                />
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <p>
                      Chirchita thrives across semi-arid and dry tropical
                      regions of India. It tolerates poor soil fertility and
                      rocky conditions. The plant prefers sunny locations and is
                      highly drought-tolerant.
                    </p>

                    <p>
                      It is increasingly being sourced for herbal formulations,
                      making it valuable for bulk collectors and herbal
                      companies. Cultivation on marginal lands allows farmers to
                      monetize uncultivated areas while aiding ecological
                      restoration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adusa">
        <div className="content">
          <div className="container">
            <div className="heading">
              <h2>Yavasa (Alhagi maurorum)</h2>
              <p>
                <strong>The Drought Warrior of Arid Lands</strong>
              </p>
              <p>
                Yavasa is a thorny shrub that thrives in dry and saline soils.
                It is traditionally used in desert medicine and is known for its
                resilience in extremely harsh environments.
              </p>
            </div>

            <div className="benefits">
              <h3 className="key_heading">Key Benefits</h3>

              <div className="row g-5">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Drought Resistance: Survives with minimal water, ideal for
                      arid and semi-arid zones.
                    </p>
                  </div>
                  <Image
                    src="/images/yavasa-bane-1.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/yavasa-bane-2.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Medicinal Value: Used for urinary disorders, wound
                      healing, and digestive issues.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Livelihood Support: Acts as a fodder source during
                      drought.
                    </p>
                  </div>
                  <Image
                    src="/images/yavasa-bane-3.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/yavasa-bane-4.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Soil Reclamation: Helps improve degraded and saline lands.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="key_heading pb-3">
                Agro-climatic Suitability &<br />
                Economic Potential
              </h3>
              <div className="text-center">
                <Image
                  src="/images/yavasao-hand-round.png" // Replace with your image path
                  alt="Background logs"
                  width={330}
                  height={316}
                  quality={90}
                  className="mb-5"
                />
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <p>
                      Adusa is highly adaptable to Indian tropical and
                      subtropical climates. It grows in loamy to slightly saline
                      soils and tolerates drought conditions. It thrives best in
                      full to partial sunlight.
                    </p>

                    <p>
                      Vasaka is widely used in herbal medicine and respiratory
                      syrups, creating consistent demand in Ayurvedic product
                      industries. Farmers can sell dried leaves, extracts, or
                      grow saplings for sale to herbal nurseries and medicinal
                      plantations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="adusa adusa_white">
        <div className="content">
          <div className="container">
            <div className="heading">
              <h2>Kanghi (Abutilon indicum)</h2>
              <p>
                <strong>The Gentle Healer with Golden Blooms</strong>
              </p>
              <p>
                Kanghi, also called Indian Mallow, is a soft-wooded shrub with
                velvety leaves and yellow bell-shaped flowers. It’s a common
                ingredient in rural medicine and home gardens.
              </p>
            </div>

            <div className="benefits">
              <h3 className="key_heading">Key Benefits</h3>

              <div className="row g-5">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>
                      Multi-purpose Use: Treats coughs, wounds, inflammation,
                      and muscle pain.
                    </p>
                  </div>
                  <Image
                    src="/images/kanghi-bane-1.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/kanghi-bane-2.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>
                      Aesthetic Value: Attractive flowers make it suitable for
                      medicinal-cum-ornamental gardens.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="copy">
                    <p>Livestock Value: Tender shoots are used as fodder.</p>
                  </div>
                  <Image
                    src="/images/kanghi-bane-3.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <Image
                    src="/images/kanghi-bane-4.png" // Replace with your image path
                    alt="Background logs"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    quality={90}
                    className="h-auto w-100"
                  />
                  <div className="copy">
                    <p>Pollinator Plant: Supports bees and butterflies.</p>
                  </div>
                </div>
              </div>

              <h3 className="key_heading pb-3">
                Agro-climatic Suitability &<br />
                Economic Potential
              </h3>
              <div className="text-center">
                <Image
                  src="/images/kanghi-hand-round.png" // Replace with your image path
                  alt="Background logs"
                  width={330}
                  height={316}
                  quality={90}
                  className="mb-5"
                />
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <p>
                      Kanghi grows in a variety of conditions—humid, dry, and
                      even shaded areas. It prefers loamy or clay soils and
                      performs well in most Indian states.
                    </p>

                    <p>
                      Used in Ayurvedic and Unani systems, Kanghi supports the
                      herbal trade. It is easy to propagate and grow, making it
                      a good addition to kitchen gardens, herbal clusters, and
                      homestead farming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_cultivate space">
        <div className="container">
          <div className="title text-center mb-5">
            <h2>
              Why Cultivate Shrubs with Athulye
              <br />
              Krishi Vana?
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="box">
                <img
                  src="/images/why_cultivate_01.png"
                  className="cover"
                  alt=""
                />
                <p>
                  <span>Multifunctional Plants</span>{" "}
                  <img src="images/right-arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="box">
                <img
                  src="/images/why_cultivate_02.png"
                  className="cover"
                  alt=""
                />
                <p>
                  <span>Restore Marginal Lands</span>{" "}
                  <img src="images/right-arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="box">
                <img
                  src="/images/why_cultivate_03.png"
                  className="cover"
                  alt=""
                />
                <p>
                  <span>Resilient and Low Input</span>{" "}
                  <img src="images/right-arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="box">
                <img
                  src="/images/why_cultivate_04.png"
                  className="cover"
                  alt=""
                />
                <p>
                  <span>Income from Herbal Products</span>{" "}
                  <img src="images/right-arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="box">
                <img
                  src="/images/why_cultivate_05.png"
                  className="cover"
                  alt=""
                />
                <p>
                  <span>Community Herbal Gardens</span>{" "}
                  <img src="images/right-arrow.png" alt="arrow" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space atulya_slider">
        <div className="container-fluid">
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-lg-4">
              <div className="title">
                <h2>
                  Atulye Krishi
                  <br />
                  Vana’s Support
                  <br />
                  Services
                </h2>
                <p className="mb-0">
                  We enable communities, SHGs,
                  <br />
                  farmers, and institutions to
                  <br />
                  grow these shrubs effectively
                  <br />
                  and profitably.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <SliderAtulye />
            </div>
          </div>
        </div>
      </section>

      <section className="application space">
        <div className="container-fluid">
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-lg-4">
              <div className="title">
                <h2>Applications Across Sectors</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <SliderApplication />
            </div>
          </div>
        </div>
      </section>

      <section className="envirement space">
        <div className="container">
          <div className="title text-center mb-5">
            <h2>Environmental Impact</h2>
          </div>
          <SliderEnvirement />
        </div>
      </section>

      <section className="conclusion space">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="title">
                <h2>
                  Conclusion: Small Shrubs,
                  <br />
                  Big Impact
                </h2>
              </div>
              <p>
                Shrubs like Vasaka, Chirchita, Yavasa, and Kanghi are compact
                powerhouses of healing, resilience, and green potential. At
                Athulye Krishi Vana, we see these plants not just as herbal
                ingredients, but as tools to restore landscapes, strengthen
                livelihoods, and revive India’s traditional plant knowledge.
                Whether you're transforming a wasteland, starting a herbal
                garden, or looking for low-maintenance plants for agroecological
                farming—these shrubs offer reliable returns and lasting value.
                <strong>
                  Grow health, heritage, and habitat with us. Partner with
                  Athulye Krishi Vana and make every plant a purpose-driven
                  choice.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq space">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="copy">
                <h2>FAQ</h2>
                <h3>
                  Can these shrubs be intercropped with trees or other crops?
                </h3>
                <p>
                  Yes, these shrubs are well-suited for intercropping in
                  agroforestry systems. They have moderate space requirements
                  and shallow roots, so they don’t heavily compete with
                  deeper-rooted crops or trees. You can grow them alongside
                  fruit trees, nitrogen-fixing species, or grasses. Their
                  presence can help suppress weeds, retain soil moisture, and
                  attract pollinators. Shrubs like Chirchita and Kanghi provide
                  seasonal biomass, while Yavasa and Adusa act as natural
                  buffers. Intercropping them can enhance farm diversity, reduce
                  pest pressure, and create a microclimate that benefits the
                  overall system—especially in resource-limited or
                  climate-vulnerable regions.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <Faq />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
