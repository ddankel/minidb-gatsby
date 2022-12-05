import React from "react";
import { Form, Button, Stack } from "react-bootstrap";

import Filter from "./Filter";
import useAggregatedTags from "../../hooks/useAggregatedTags";
import { useFilterStoreItem, useFilterStoreState } from "@/hooks/useFilterStore";

const Filters = ({ btnClass }) => {
  const tagList = useAggregatedTags();

  const [raceFilter, setRaceFilter] = useFilterStoreState("raceFilter");
  const [archetypeFilter, setArchetypeFilter] = useFilterStoreState("archetypeFilter");
  const [weaponFilter, setWeaponFilter] = useFilterStoreState("weaponFilter");
  const [armorFilter, setArmorFilter] = useFilterStoreState("armorFilter");
  const [paintedFilter, setPaintedFilter] = useFilterStoreState("paintedFilter");
  const [lineFilter, setLineFilter] = useFilterStoreState("lineFilter");
  const [ignoreMonsters, setIgnoreMonsters] = useFilterStoreState("ignoreMonsters");
  const isFiltered = useFilterStoreItem("isFiltered")();

  const resetAll = () => {
    setRaceFilter("all");
    setArchetypeFilter("all");
    setWeaponFilter("all");
    setArmorFilter("all");
    setPaintedFilter("all");
    setLineFilter("all");
    setIgnoreMonsters(false);
  };

  return (
    <Stack gap="2" className="mx-3">
      <Filter title="Race" value={raceFilter} setValue={setRaceFilter} options={tagList.raceTags} />
      <Filter
        title="Archetype"
        value={archetypeFilter}
        setValue={setArchetypeFilter}
        options={tagList.archetypeTags}
      />
      <Filter
        title="Weapon"
        value={weaponFilter}
        setValue={setWeaponFilter}
        options={tagList.weaponTags}
      />
      <Filter
        title="Armor"
        value={armorFilter}
        setValue={setArmorFilter}
        options={tagList.armorTags}
      />
      <Filter title="Line" value={lineFilter} setValue={setLineFilter} options={tagList.lines} />
      <Filter
        title="Status"
        value={paintedFilter}
        setValue={setPaintedFilter}
        options={tagList.paintedTags}
      />
      <div className="py-3">
        <Form.Check
          className="float-end"
          checked={ignoreMonsters}
          type="switch"
          id="hide-monsters"
          label="Hide beasts & constructs"
          onChange={() => setIgnoreMonsters(!ignoreMonsters)}
        />
      </div>
      <Button
        size="sm"
        className={btnClass}
        onClick={() => resetAll()}
        disabled={!isFiltered}
        variant={isFiltered ? "primary" : "secondary"}
      >
        Reset Filters
      </Button>
    </Stack>
  );
};

export default Filters;
