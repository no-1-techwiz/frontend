import React, { useEffect, useRef, useState } from 'react';
import {Input} from "@components/ui/input.jsx";
import {Button} from "@components/ui/button.jsx";

const HereMap = () => {
	const mapRef = useRef(null);
	const [mapInstance, setMapInstance] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (!window.H || !mapRef.current) return;

		const platform = new window.H.service.Platform({
			apikey: 'OQKoQ7vdKvQIRU5KPLwl8-dbjOlCu047bSQN8YMw89s', // Thay YOUR_API_KEY bằng API key của bạn
		});

		const defaultLayers = platform.createDefaultLayers();

		const map = new window.H.Map(
			mapRef.current,
			defaultLayers.vector.normal.map,
			{
				center: { lat: 52.5159, lng: 13.3777 },
				zoom: 14,
				pixelRatio: window.devicePixelRatio || 1,
			}
		);

		// Tạo hành vi kéo và zoom
		new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

		// Tạo UI mặc định với thanh zoom và các control khác
		window.H.ui.UI.createDefault(map, defaultLayers);

		setMapInstance(map);

		return () => {
			map.dispose(); // Clean up khi component bị hủy
		};
	}, []);

	const handleSearch = async () => {
		if (!searchQuery || !mapInstance) return;

		const platform = new window.H.service.Platform({
			apikey: 'OQKoQ7vdKvQIRU5KPLwl8-dbjOlCu047bSQN8YMw89s',
		});
		const searchService = platform.getSearchService();

		searchService.geocode(
			{ q: searchQuery },
			(result) => {
				if (result.items.length > 0) {
					const { lat, lng } = result.items[0].position;

					// Đặt vị trí mới cho bản đồ
					mapInstance.setCenter({ lat, lng });
					mapInstance.setZoom(14);

					// Thêm một marker tại vị trí tìm kiếm
					const marker = new window.H.map.Marker({ lat, lng });
					mapInstance.addObject(marker);
				}
			},
			(error) => {
				console.error('Search error:', error);
			}
		);
	};

	return (
		<div className="h-screen">
			<div style={{ marginBlock: '10px' }} className="flex">
				<Input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Enter location..."
					style={{ padding: '5px', width: '300px' }}
				/>
				<Button onClick={handleSearch} style={{ padding: '5px 10px', marginLeft: '10px' }}>
					Search
				</Button>
			</div>
			<div
				ref={mapRef}
				style={{ width: '100%', height:"90dvh", background: 'grey' }}
			/>
		</div>
	);
};

export default HereMap;
