export const data = [
    {
        "team_name": "BHUMIPUTRA",
        "tifan_ids": {
            "tifan25_team_id": "TIFAN25-024",
            "tifan24_team_id": "TIFAN24-021"
        },
        "college_university_name": "Deogiri College of Engineering And Management Studies, Chhatrapati Sambhajinagar"
    },
    {
        "year": 2025,
        "technical_specifications": {
            "overall_dimension": "1000*1100*1400",
            "attachment_kerb_weight": "350 Kg",
            "pto_ground_wheel_powered": "No"
        }
    },
    {
        "competition": "SAEINDIA_TIFAN25",
        "frame_chassis_design": {
            "material": "IS 4392  Grade Mild Steel",
            "composition": {
                "carbon": "Maximum 0.12%.",
                "Silicon (Si)": "0.03% to 0.08%",
              "Manganese": "Maximum 0.50%",
               "Phosphorus": "Maximum 0.05%",
               "Sulfur": "Maximum 0.05%" ,
                "manganese": "1.50% max"
            },
            "mechanical_properties": {
                "tensile_strength": "Minimum of 410 MPa",
                "yield_stress": "Minimum of 250 MPa",
                "elongation": "Minimum of 23%",
                "density": "7.85 g/cm³",
                "hardness": "120-131 HBW"
            },
            "structural_properties": {
                "moment_of_inertia": "179*10^3 mm^4",
                "bending_moment": "441.3*10^3 N/mm",
                "bending_stress": "115 MPa",
                "maximum_stress": "115 MPa",
                "maximum_deflection": "105.2 mm",
                "factor_of_safety": 2
            }
        }
    },
    {
        "system_name": "Pick-up System",
        "compatible_crops": [
            "Tomato",
            "Chili",
            "Brinjal"
        ],
        "tray_capacity": {
            "tray_count": 2,
            "tray_orientation": "35 to 45 degrees on frame"
        },
        "mechanism_design": {
            "power_source": "Steppeer Motors",
            "servo": {
                "model": "",
                "angle_max": "360º",
                "pulse_width": "500-2500μs",
                "working_voltage": "DC 4.8-7.2V",
                "stall_torque": "15 kg.cm (6.0V)"
            }
        },
        "prototype_simulation": "Working Prototype or Simulation of Picking Mechanism",
        "components": {
            "end_effector_gripper": {
                "length": {
                    "before_hinge": "80mm",
                    "after_hinge": "88.75mm"
                },
                "weight": "100 gm"
            },
            "base_frame": {
                "rigid_body": {
                    "height": "300mm",
                    "length": "250mm",
                    "thickness": "3mm"
                }
            },
            "links": [
                {
                    "name": "Link 1",
                    "length": "220mm",
                    "thickness": "5mm"
                },
                {
                    "name": "Link 2",
                    "length": "300mm",
                    "thickness": "7mm"
                }
            ],
            "other_components": [
                "Nuts and Bolts",
                "Washers"
            ],
            "sapling": {
                "weight": "14 gm",
                "height": "25 cm"
            }
        }
    },
    {
        "system_name": "Conveying System",
        "features": {
            "tray_loading": "Sapling trays are placed onto the conveyor system",
            "automated_operation": "Automatic conveyor operation along a specified path",
            "gentle_handling": "Gentle movement to safeguard saplings during transit",
            "precision_placement": "Conveyor halts or slows for precise sapling placement",
            "automated_transfer_mechanism": "Automated tools or robotics for sapling transfer to the ground",
            "continuous_process": "Conveyor provides continuous tray flow for consistent planting"
        },
        "lead_screw_specifications": {
            "lengths": [
                "600mm",
                "300mm"
            ],
            "diameter": "8mm",
            "starts": 4,
            "pitch": "2mm",
            "total_lead": "8mm"
        },
        "movements": {
            "horizontal_movement": {
                "time": "5 seconds",
                "displacement": {
                    "total": "270mm",
                    "per_sample": "40mm"
                },
                "speed": "0.02 m/s",
                "torque": "0.3747 Nm"
            },
            "vertical_movement": {
                "time": "35 seconds",
                "displacement": {
                    "total": "520mm",
                    "per_sample": "40mm"
                },
                "speed": "0.02 m/s",
                "torque": "0.1998 Nm"
            }
        }
    },
    {
        "system_name": "Conveying System - Vertical Lead Screw",
        "back_driving": {
            "backing_torque": "0.0499 Nm",
            "requirement_to_movement": {
                "torque": {
                    "horizontal_lead_screw": "0.3747 Nm",
                    "vertical_lead_screw": "0.1499 Nm",
                    "holding_at_vertical": "-0.0499 Nm"
                }
            }
        },
        "motor_specifications": {
            "model": "NEMA 23",
            "step_angle": "1.8°",
            "rated_current": "3.0A DC",
            "rated_voltage": "3.6V",
            "winding_dc_resistance": "1.2Ω±10% at 25°C",
            "winding_inductance": "4mH±20%",
            "holding_torque": "≥2.45 N.m",
            "shaft_diameter": "6.35mm (1/4″)"
        }
    },
    {
        "system_name": "Digging and Soil Covering System",
        "features": {
            "drives": "High-torque electric drives for optimal performance",
            "material": "Mild steel components for durability with minimal maintenance",
            "cone_design": {
                "material": "Mild Steel",
                "thickness": "4mm",
                "fineness_ratio": 3,
                "penetration_force": "210 N",
                "opening_force": "19.29 N"
            },
            "tapered_wheels": {
                "purpose": "Soil covering after planting saplings",
                "angle": "30 degrees",
                "position": "Behind the transplanter"
            },
            "adjustability": "Digging system is adjustable, programmable, and designed for interchangeability",
            
        }
    },
    {
        "system_name": "Planting System",
        "specifications": {
            "row_spacing": {
                "min": "600 mm",
                "max": "900 mm"
            },
            "plant_spacing": {
                "min": "600 mm",
                "max": "900 mm"
            },
            "planting_speed": {
                "min": "0.5 m/s",
                "max": "1.0 m/s"
            }
        },
        "working_principle": "Duck Bill Mechanism",
        "calculations": {
            "tractor_speed": "1.0 m/s",
            "force": "200 N",
            "mass": "20 kg",
            "equation": "F = M * d / t^2",
            "cycle_time": "0.4 sec",
            "time": "0.1 sec",
            "speed": "60 rpm"
        },
        "qualifying_round": "SAEINDIA_TIFAN25"
    },
    {
        "system_name": "Hitch System Specification",
        "qualifying_round": "SAEINDIA_TIFAN25",
        "compatibility": {
            "cat": [
                "CAT I",
                "CAT II"
            ],
            "pin_hole_diameter": {
                "CAT_I": "26 mm",
                "CAT_II": "28.5 mm"
            },
            "interface_with_CAT_II": {
                "diameter": "25.5 mm"
            }
        },
        "dimensions": {
            "mast_height": "610 +/- 1.5 mm",
            "lower_hitch_distance": "825 +/- 1.5 mm",
            "top_hitch_pin_diameter": "26 mm",
            "lower_hitch_pin_diameter": "28.5 mm",
            "clevis": "65 mm"
        }
    },
    // {
    //     "qualifying_round": "SAEINDIA_TIFAN25",
    //     "sub_systems": {
    //         "chassis_frame_and_electronic_system": {
    //             "mechanical_component_cost": "4745/-",
    //             "electrical_component_cost": "16457/-"
    //         },
    //         "pick_and_place": {
    //             "mechanical_component_cost": "3445/-",
    //             "electrical_component_cost": "1808/-"
    //         },
    //         "conveyor": {
    //             "mechanical_component_cost": "25876/-",
    //             "electrical_component_cost": "3200/-"
    //         },
    //         "digging_and_dropping": {
    //             "mechanical_component_cost": "6000/-",
    //             "electrical_component_cost": "11785/-"
    //         }
    //     }
    // },
    {
        "qualifying_round": "SAEINDIA_TIFAN25",
        "failure_modes": [
            {
                "item_function": "Frame",
                "potential_failure_mode": "Structural failure, Bending & Breaking of Frame",
                "potential_effects_of_failure": "Permanent deformation, Frame Breaks or Bends.",
                "severity": 5,
                "potential_causes_of_failure": [
                    "Axial Stress Exceeds Yield Stress of Material Due to Excess/impact Load",
                    "Poor Welding"
                ],
                "probability": 4,
                "current_design_control": "Material / FEA validation",
                "detection": 2,
                "rpn": 40,
                "recommended_action": [
                    "Choose Material With Appropriate Factor of Safety.",
                    "Effective Design & Analysis."
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "3-Point Hitch System",
                "potential_failure_mode": "Hitch Pin Misalignment Or Breakage",
                "potential_effects_of_failure": "Lost Attachment, Operational Disruption.",
                "severity": 4,
                "potential_causes_of_failure": [
                    "Weak Pins",
                    "Improper Use",
                    "Overloading",
                    "Poor Maintenance"
                ],
                "probability": 5,
                "current_design_control": "Using Locking Mechanism To Secure The 3 Point Hitch In The Raised Position",
                "detection": 4,
                "rpn": 80,
                "recommended_action": [
                    "Check Hydraulic Fluid Reservoir Full With The Proper Hydraulic Oil."
                ],
                "responsibility_target_date": ""
            },
            
          
            {
                "item_function": "Bearings",
                "potential_failure_mode": "Failure of bearings",
                "potential_effects_of_failure": "Slow or inconsistent actuation, Delays in Planting",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Debris in the Mechanism"
                ],
                "probability": 5,
                "current_design_control": "Regular Inspection",
                "detection": 4,
                "rpn": 120,
                "recommended_action": [
                    "Lubrication on bearings"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Motor",
                "potential_failure_mode": "Overheating",
                "potential_effects_of_failure": "Reduced lifespan",
                "severity": 7,
                "potential_causes_of_failure": [
                    "High load"
                ],
                "probability": 5,
                "current_design_control": "Thermal protection",
                "detection": 4,
                "rpn": 140,
                "recommended_action": [
                    "Improve cooling system"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Wires",
                "potential_failure_mode": "Loose connection",
                "potential_effects_of_failure": "Intermittent signal loss",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Vibration/thermal cycling"
                ],
                "probability": 5,
                "current_design_control": "Secure mounting",
                "detection": 4,
                "rpn": 120,
                "recommended_action": [
                    "Design for better retention"
                ],
                "responsibility_target_date": ""
            }
        ]
    },
    {
        "qualifying_round": "SAEINDIA_TIFAN25",
        "failure_modes": [
            {
                "item_function": "Complete Mechanism",
                "potential_failure_mode": "Corrosive Wear",
                "potential_effects_of_failure": "Reduced Performances",
                "severity": 8,
                "potential_causes_of_failure": [
                    "Chemicals",
                    "Abrasive Particles"
                ],
                "probability": 5,
                "current_design_control": "Protective Coating / Material Selection",
                "detection": 4,
                "rpn": 160,
                "recommended_action": [
                    "Use of advanced corrosion resistant coatings"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Pivot Joints",
                "potential_failure_mode": "Frictional Wear",
                "potential_effects_of_failure": "Loss of precise control",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Excessive Friction",
                    "Wear"
                ],
                "probability": 4,
                "current_design_control": "Capacity Analysis",
                "detection": 5,
                "rpn": 120,
                "recommended_action": [
                    "Regular Manual lubrication"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Wheels",
                "potential_failure_mode": "Slipping of wheels",
                "potential_effects_of_failure": "Lack of traction",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Poor surface grip"
                ],
                "probability": 5,
                "current_design_control": "Friction Analysis",
                "detection": 5,
                "rpn": 150,
                "recommended_action": [
                    "Use of puncture resistance tire"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Bearings",
                "potential_failure_mode": "Frictional Wear",
                "potential_effects_of_failure": "Increased Friction, Efficiency Loss",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Friction"
                ],
                "probability": 6,
                "current_design_control": "Surface Treatment",
                "detection": 6,
                "rpn": 216,
                "recommended_action": [
                    "Lubrication"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Supporting Shaft",
                "potential_failure_mode": "Bending",
                "potential_effects_of_failure": "Inaccurate Digging or dropping",
                "severity": 6,
                "potential_causes_of_failure": [
                    "Vibrations"
                ],
                "probability": 4,
                "current_design_control": "Stress Analysis",
                "detection": 6,
                "rpn": 144,
                "recommended_action": [
                    "Regular Maintenance"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Tooth",
                "potential_failure_mode": "Tooth Wear",
                "potential_effects_of_failure": "Slippage",
                "severity": 7,
                "potential_causes_of_failure": [
                    "Friction"
                ],
                "probability": 6,
                "current_design_control": "Surface Hardening treatments",
                "detection": 5,
                "rpn": 210,
                "recommended_action": [
                    "Lubrications"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Transport Saplings",
                "potential_failure_mode": [
                    "Motor Failure",
                    "Leadscrew Failure"
                ],
                "potential_effects_of_failure": [
                    "Sampling will not be delivered Properly",
                    "Low Efficiency"
                ],
                "severity": [
                    9,
                    9
                ],
                "potential_causes_of_failure": [
                    [
                        "Overheating",
                        "Voltage spikes",
                        "Overloading",
                        "Poor Lubrication"
                    ],
                    [
                        "Overheating",
                        "Voltage spikes",
                        "Overloading",
                        "Poor Lubrication"
                    ]
                ],
                "probability": [
                    4,
                    4
                ],
                "current_design_control": [
                    "Using current sensors",
                    "Use a TVS diode and decoupling capacitors"
                ],
                "detection": [
                    9,
                    1
                ],
                "rpn": [
                    324,
                    360
                ],
                "recommended_action": [
                    [
                        "Reduce current, improve ventilation",
                        "Install a voltage regulator"
                    ],
                    [
                        "Reduce the load",
                        "Clean the lead screw, apply appropriate lubricant"
                    ]
                ],
                "responsibility_target_date": ""
            }
        ]
    },
    {
        "qualifying_round": "SAEINDIA_TIFAN25",
        "failure_modes": [
            {
                "item_function": "Cone",
                "potential_failure_mode": [
                    "Cone tip Wear / Breakage",
                    "Cone bending or deformation",
                    "Cone cracking",
                    "Corrosion on cone surface"
                ],
                "potential_effects_of_failure": [
                    "Unable to dig effectively",
                    "Misalignment in digging",
                    "Total failure during operation",
                    "Reduced digging efficiency"
                ],
                "severity": [
                    8,
                    7,
                    9,
                    5
                ],
                "potential_causes_of_failure": [
                    "Excessive wear due to abrasive material",
                    "Excessive force or impact during digging",
                    "High Stress Concentration, Fatigue",
                    "Exposure to moisture and corrosive substances"
                ],
                "probability": [
                    4,
                    3,
                    2,
                    5
                ],
                "current_design_control": [
                    "Use hard wearing materials",
                    "Structural Stress Analysis",
                    "FEA",
                    "Coating with corrosion resistant material"
                ],
                "detection": [
                    4,
                    3,
                    3,
                    4
                ],
                "rpn": [
                    128,
                    63,
                    54,
                    125
                ],
                "recommended_action": [
                    "Apply coating to enhance durability",
                    "Increase thickness",
                    "Add reinforcement",
                    "Apply corrosion inhibitors"
                ],
                "responsibility_target_date": ""
            },
            {
                "item_function": "Transport Saplings",
                "potential_failure_mode": [
                    "Motor Failure",
                    "Leadscrew Failure"
                ],
                "potential_effects_of_failure": [
                    "Sampling will not be delivered Properly",
                    "Low Efficiency"
                ],
                "severity": [
                    9,
                    9
                ],
                "potential_causes_of_failure": [
                    "Overheating",
                    "Voltage spikes",
                    "Overloading",
                    "Poor Lubrication"
                ],
                "probability": [
                    4,
                    4
                ],
                "current_design_control": [
                    "Using current sensors",
                    "Use a TVS diode and decoupling capacitors"
                ],
                "detection": [
                    9,
                    1
                ],
                "rpn": [
                    324,
                    360
                ],
                "recommended_action": [
                    "Reduce current, improve ventilation",
                    "Install a voltage regulator",
                    "Reduce the load",
                    "Clean the lead screw, apply appropriate lubricant"
                ],
                "responsibility_target_date": ""
            }
        ]
    },
    {
        "qualifying_round": "SAEINDIA_TIFAN25",
        "team_name": "Bhumiputra",
        "vehicle_owner": "DIEMS",
        "part_no": "",
        "application": "Automatic Multiple Vegetable Transplanter",
        "approval_head": "Dr. Sachin Agrawal",
        "plan_date": "",
        "inspection_head": "",
        "college_name": "Deogiri Institute of Engineering and Management Studies",
        "vehicle_no": "Not Defined",
        "faculty_advisor": "Dr. Sachin Agrawal",
        "tests": [
            // {
            //     "test_number": 1,
            //     "test_name": "Material Selection",
            //     "test_specification_method": "By material Properties and Testing",
            //     "acceptance_criteria": "Strength, Availability and Testing",
            //     "responsibility": "Ishan Endole",
            //     "result": "Good Strength Available",
            //     "start_date": "",
            //     "end_date": "",
            //     "remark": ""
            // },
            {
                "test_number": 2,
                "test_name": "Designing Process",
                "test_specification_method": "CAD software",
                "acceptance_criteria": "Easy to design",
                "responsibility": "Aniket Pawar",
                "result": "Easy to manufacture",
                "start_date": "",
                "end_date": "",
                "remark": ""
            },
            {
                "test_number": 3,
                "test_name": "Design Analysis",
                "test_specification_method": "CAE software",
                "acceptance_criteria": "No deformation or equivalent stress, Good FOS",
                "responsibility": "Mohit Joshi",
                "result": "High factor of safety",
                "start_date": "",
                "end_date": "",
                "remark": ""
            },
            // {
            //     "test_number": 4,
            //     "test_name": "Digging and pressing System",
            //     "test_specification_method": "Field test",
            //     "acceptance_criteria": "",
            //     "responsibility": "Vaibhav Jadhav",
            //     "result": "",
            //     "start_date": "",
            //     "end_date": "",
            //     "remark": ""
            // },
            // {
            //     "test_number": 5,
            //     "test_name": "Robotic arm",
            //     "test_specification_method": "Field test",
            //     "acceptance_criteria": "Accuracy, Speed and Efficiency, control",
            //     "responsibility": "Prathmesh Wankhede",
            //     "result": "",
            //     "start_date": "",
            //     "end_date": "",
            //     "remark": ""
            // },
            // {
            //     "test_number": 6,
            //     "test_name": "Conveyor system",
            //     "test_specification_method": "Tensioning test",
            //     "acceptance_criteria": "Efficient Working",
            //     "responsibility": "Raj Hiwale",
            //     "result": "",
            //     "start_date": "",
            //     "end_date": "",
            //     "remark": ""
            // },
            {
                "test_number": 7,
                "test_name": "Innovation",
                "test_specification_method": "Field test",
                "acceptance_criteria": "Future scope, Result",
                "responsibility": "Siddhant Sarode",
                "result": "In studying phase",
                "start_date": "",
                "end_date": "",
                "remark": ""
            }
        ]
    },
    {
        "qualifying_round": "SAEINDIA_TIFAN25",
        "faculty_advisor": "Dr. S.M. Agrawal",
        "team_caption": "Mohit M. Joshi",
        
        "innovation_team": [
            "Siddhant Sarode",
            "Priti vilas jadhav",
            "Gauri Bhagyawant"
           
        ]
    },
    {
        "in_house_workshop_facilities": true,
        "test_field_availability": true,
        "equipment": [
            "LASER CUTTING",
            "TIG UTM M/C",
            "CNC LATHE M/C",
            "MILLING M/C",
            "SLOTTER M/C"
        ]
    },
    {
        "elements": [
            {
                "name": "Phosphorus (P)",
                "normal_rate_ppm": "25 – 35"
            },
            {
                "name": "Sulfur (S)",
                "normal_rate_ppm": "7 – 15"
            },
            {
                "name": "Zinc (Zn)",
                "normal_rate_ppm": "1 – 3"
            },
            {
                "name": "Iron (Fe)",
                "normal_rate_ppm": "10 – 20"
            },
            {
                "name": "Manganese (Mn)",
                "normal_rate_ppm": "8 – 11"
            },
            {
                "name": "Copper (Cu)",
                "normal_rate_ppm": "0.8 – 1"
            },
            {
                "name": "Potassium (K)",
                "normal_rate_ppm": "165 – 220"
            },
            {
                "name": "Calcium (Ca)",
                "normal_rate_ppm": "1400 or higher"
            },
            {
                "name": "Magnesium (Mg)",
                "normal_rate_ppm": "100 or higher"
            },
            {
                "name": "Sodium (Na)",
                "normal_rate_ppm": "80 – 120"
            }
        ]
    },
    {
        "vegetables": [
            {
                "name": [
                    "Carrot",
                    "Turnip",
                    "Radish",
                    "Beetroot"
                ],
                "optimal_soil_type": "Sandy Loam",
                "pH_range": "6.0 – 7.0",
                "nitrogen_ppm": "30 – 50",
                "phosphorus_ppm": "20 – 30",
                "potassium_ppm": "150 – 200",
                "soil_salinity_dS_per_m": "0.6 – 1.0"
            },
            {
                "name": [
                    "Cabbage",
                    "Spinach",
                    "Lettuce",
                    "Coriander",
                    "Mint",
                    "Kale",
                    "Fenugreek",
                    "Dill"
                ],
                "optimal_soil_type": "Loamy",
                "pH_range": "6.0 – 7.5",
                "nitrogen_ppm": "50 – 80",
                "phosphorus_ppm": "30 – 50",
                "potassium_ppm": "180 – 240",
                "soil_salinity_dS_per_m": "0.5 – 1.2"
            },
            {
                "name": [
                    "Cauliflower",
                    "Broccoli",
                    "Artichoke"
                ],
                "optimal_soil_type": "Loamy",
                "pH_range": "6.0 – 7.2",
                "nitrogen_ppm": "50 – 80",
                "phosphorus_ppm": "30 – 50",
                "potassium_ppm": "180 – 240",
                "soil_salinity_dS_per_m": "0.5 – 1.0"
            },
            {
                "name": [
                    "Potato",
                    "Ginger",
                    "Turmeric"
                ],
                "optimal_soil_type": "Sandy Loam",
                "pH_range": "5.5 – 6.5",
                "nitrogen_ppm": "60 – 120",
                "phosphorus_ppm": "30 – 40",
                "potassium_ppm": "150 – 300",
                "soil_salinity_dS_per_m": "0.4 – 0.8"
            },
            {
                "name": [
                    "Cucumber",
                    "Pumpkin",
                    "Tomato",
                    "Capsicum",
                    "Corn",
                    "Beans"
                ],
                "optimal_soil_type": "Loamy",
                "pH_range": "6.0 – 7.0",
                "nitrogen_ppm": "40 – 60",
                "phosphorus_ppm": "25 – 35",
                "potassium_ppm": "200 – 250",
                "soil_salinity_dS_per_m": "0.5 – 1.0"
            },
            {
                "name": [
                    "Onion",
                    "Leek",
                    "Garlic",
                    "Fennel"
                ],
                "optimal_soil_type": "Sandy Loam",
                "pH_range": "6.0 – 7.0",
                "nitrogen_ppm": "30 – 50",
                "phosphorus_ppm": "25 – 30",
                "potassium_ppm": "150 – 200",
                "soil_salinity_dS_per_m": "0.6 – 1.2"
            },
            {
                "name": [
                    "Asparagus",
                    "Lemongrass",
                    "Celery",
                    "Swiss Chard"
                ],
                "optimal_soil_type": "Loamy",
                "pH_range": "6.0 – 7.0",
                "nitrogen_ppm": "50 – 70",
                "phosphorus_ppm": "25 – 40",
                "potassium_ppm": "180 – 240",
                "soil_salinity_dS_per_m": "0.5 – 1.0"
            }
        ]
    }
];