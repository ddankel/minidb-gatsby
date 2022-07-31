import React from "react";
import { Form, Button, Stack } from "react-bootstrap";

import Filter from "./Filter";
import useAggregatedTags from "../../../hooks/useAggregatedTags";
import useMiniatureCollection from "../../../hooks/useMiniatureCollection";
import { useFilterContext } from "../../../context/FilterContext";

const Filters = ({ btnClass }) => {
  const minis = useMiniatureCollection();
  const [tagList] = React.useState(useAggregatedTags(minis));

  const {
    raceFilter,
    setRaceFilter,
    archetypeFilter,
    setArchetypeFilter,
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
    <Stack gap="2" className="mx-3">
      <Filter title="Race" value={raceFilter} setValue={setRaceFilter} options={tagList.race} />
      <Filter
        title="Archetype"
        value={archetypeFilter}
        setValue={setArchetypeFilter}
        options={tagList.archetype}
      />
      <Filter
        title="Weapon"
        value={weaponFilter}
        setValue={setWeaponFilter}
        options={tagList.weapons}
      />
      <Filter title="Armor" value={armorFilter} setValue={setArmorFilter} options={tagList.armor} />
      <Filter title="Line" value={lineFilter} setValue={setLineFilter} options={tagList.line} />
      <Filter
        title="Status"
        value={paintedFilter}
        setValue={setPaintedFilter}
        options={tagList.status}
      />
      <div className="pt-3">
        <Form.Check
          className="float-end"
          checked={ignoreMonsters}
          type="switch"
          id="hide-monsters"
          label="Hide beasts & constructs"
          onChange={() => setIgnoreMonsters(!ignoreMonsters)}
        />
      </div>
      <div className="pt-3">
        <Button
          size="sm"
          className={btnClass}
          onClick={() => resetAll()}
          disabled={!isFiltered}
          variant={isFiltered ? "primary" : "secondary"}
        >
          Reset All Filters
        </Button>
      </div>
    </Stack>
  );
};

export default Filters;
