import React from "react";
import { Row, Col } from "react-bootstrap";

import Filter from "./Filter";
import Gallery from "./Gallery";

import useMiniatureFilter from "./hooks/use_miniature_filter";
import { aggregateTags } from "./utils";

const GuidedSearch = ({ minis }) => {
  const tagList = aggregateTags(minis);
  const {
    raceFilter,
    setRaceFilter,
    weaponFilter,
    setWeaponFilter,
    armorFilter,
    setArmorFilter,
    paintedFilter,
    setPaintedFilter,
    nameFilter,
    setNameFilter,
    lineFilter,
    setLineFilter,
    filteredMiniatures,
  } = useMiniatureFilter(minis);

  console.log("taglist", tagList);

  return (
    <>
      <Row className="mx-3">
        <Col md={6}>
          <Filter
            title="Race"
            value={raceFilter}
            setValue={setRaceFilter}
            defaultValue="all"
            options={tagList.race}
          />
        </Col>
        <Col md={6}>
          <Filter
            title="Weapon"
            value={weaponFilter}
            setValue={setWeaponFilter}
            defaultValue="all"
            options={tagList.weapons}
          />
        </Col>
        <Col md={6}>
          <Filter
            title="Armor"
            value={armorFilter}
            setValue={setArmorFilter}
            defaultValue="all"
            options={tagList.armor}
          />
        </Col>
        <Col md={6}>
          <Filter
            title="Painted"
            value={paintedFilter}
            setValue={setPaintedFilter}
            defaultValue="all"
            options={tagList.is_painted}
          />
        </Col>
      </Row>

      <Gallery minis={filteredMiniatures} />
    </>
  );
};

export default GuidedSearch;
