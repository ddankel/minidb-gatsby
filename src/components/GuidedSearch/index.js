import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

import Filter from "./Filter";
import Gallery from "./Gallery";

import useMiniatureFilter from "./hooks/use_miniature_filter";
import { aggregateTags } from "./utils";

const Spacer = styled.div`
  height: 2rem;
`;

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
    ignoreMonsters,
    setIgnoreMonsters,
    filteredMiniatures,
  } = useMiniatureFilter(minis);

  const resetAll = () => {
    setRaceFilter("all");
    setWeaponFilter("all");
    setArmorFilter("all");
    setPaintedFilter("all");
    setIgnoreMonsters(false);
  };

  return (
    <>
      <Row className="mx-3">
        <Col md={6}>
          <Filter title="Race" value={raceFilter} setValue={setRaceFilter} options={tagList.race} />
        </Col>
        <Col md={6}>
          <Filter
            title="Weapon"
            value={weaponFilter}
            setValue={setWeaponFilter}
            options={tagList.weapons}
          />
        </Col>
        <Col md={6}>
          <Filter
            title="Armor"
            value={armorFilter}
            setValue={setArmorFilter}
            options={tagList.armor}
          />
        </Col>
        <Col md={6}>
          <Filter
            title="Painted"
            value={paintedFilter}
            setValue={setPaintedFilter}
            options={tagList.is_painted}
          />
        </Col>
        <Col sm={6}>
          <div className="float-end mb-2">
            <Form.Check
              checked={ignoreMonsters}
              type="switch"
              id="hide-monsters"
              label="Hide beasts & constructs"
              onChange={() => setIgnoreMonsters(!ignoreMonsters)}
            />
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-end">
            <Button variant="primary" onClick={() => resetAll()}>
              Reset All Filters
            </Button>
          </div>
        </Col>
      </Row>

      <Spacer />
      <Gallery minis={filteredMiniatures} />
    </>
  );
};

export default GuidedSearch;
