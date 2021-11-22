import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

import Filter from "./Filter";
import Gallery from "./Gallery";

import useAggregatedTags from "../../hooks/useAggregatedTags";
import useMiniatureCollection from "../../hooks/useMiniatureCollection";

import { useFilterContext } from "../../context/FilterContext";

const Spacer = styled.div`
  height: 2rem;
`;

const GuidedSearchPage = () => {
  const minis = useMiniatureCollection();
  const [tagList] = React.useState(useAggregatedTags(minis));

  const {
    raceFilter,
    setRaceFilter,
    weaponFilter,
    setWeaponFilter,
    armorFilter,
    setArmorFilter,
    paintedFilter,
    setPaintedFilter,
    lineFilter,
    setLineFilter,
    ignoreMonsters,
    setIgnoreMonsters,
    filteredMiniatures,
    isFiltered,
  } = useFilterContext();

  const resetAll = () => {
    setRaceFilter("all");
    setWeaponFilter("all");
    setArmorFilter("all");
    setPaintedFilter("all");
    setLineFilter("all");
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
          <Filter title="Line" value={lineFilter} setValue={setLineFilter} options={tagList.line} />
        </Col>
        <Col md={6}>
          <Filter
            title="Status"
            value={paintedFilter}
            setValue={setPaintedFilter}
            options={tagList.status}
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
        <Col sm={6} md={12}>
          <div className="float-end">
            <Button
              variant="primary"
              onClick={() => resetAll()}
              disabled={!isFiltered}
              variant={isFiltered ? "primary" : "secondary"}
            >
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

export default GuidedSearchPage;
