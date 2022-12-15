import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import _ from "lodash";

import useAggregatedTags from "../../hooks/useAggregatedTags";
import { useFilterStoreItem, useFilterStoreState } from "@/hooks/useFilterStore";

import RadioGroup from "./RadioGroup";

const NewFilters = ({ btnClass }) => {
  const tagList = useAggregatedTags();

  const [raceFilter, setRaceFilter] = useFilterStoreState("raceFilter");
  const [archetypeFilter, setArchetypeFilter] = useFilterStoreState("archetypeFilter");
  const [weaponFilter, setWeaponFilter] = useFilterStoreState("weaponFilter");
  const [armorFilter, setArmorFilter] = useFilterStoreState("armorFilter");
  const [paintedFilter, setPaintedFilter] = useFilterStoreState("paintedFilter");
  const [lineFilter, setLineFilter] = useFilterStoreState("lineFilter");
  const [ignoreMonsters, setIgnoreMonsters] = useFilterStoreState("ignoreMonsters");
  const isFiltered = useFilterStoreItem("isFiltered")();

  // console.log("dafasdf", tagList.raceTags, _.take(tagList.raceTags, 3));

  return (
    <Stack gap="2" className="mx-3">
      <RadioGroup
        title="Species"
        value={[raceFilter]}
        options={tagList.raceTags}
        featuredOptions={_.take(tagList.raceTags, 5)}
        onChange={(v) => setRaceFilter(v)}
      />

      <RadioGroup
        title="Archtype"
        value={[archetypeFilter]}
        options={tagList.archetypeTags}
        onChange={(v) => setArchetypeFilter(v)}
      />

      <RadioGroup
        title="Weapons"
        value={[weaponFilter]}
        options={tagList.weaponTags}
        featuredOptions={_.take(tagList.weaponTags, 5)}
        onChange={(v) => setWeaponFilter(v)}
      />

      <RadioGroup
        title="Armor"
        value={[armorFilter]}
        options={tagList.armorTags}
        onChange={(v) => setArmorFilter(v)}
      />

      <RadioGroup
        title="Line"
        value={[lineFilter]}
        options={tagList.lines}
        featuredOptions={tagList.lines.filter((item) => !item.includes(">"))}
        onChange={(v) => setLineFilter(v)}
      />

      <RadioGroup
        title="Status"
        value={[paintedFilter]}
        options={tagList.paintedTags}
        onChange={(v) => setPaintedFilter(v)}
      />
    </Stack>
  );
};

export default NewFilters;
